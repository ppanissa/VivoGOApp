import axios from 'axios';
import env from 'expo-config';
import { store } from '~/store';

import {
  authRefreshToken,
  authRequestLogout,
} from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: env.api,
});

// api.defaults.headers.authorization = `Bearer ${env.oldToken}`;

const successResponse = response => {
  return response;
};

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token));
}

function addSubscriber(callback) {
  subscribers.push(callback);
}

const errorResponse = error => {
  const {
    config,
    response: { status },
  } = error;

  if (status !== 401) {
    return Promise.reject(error);
  }
  const originalRequest = config;

  if (!isAlreadyFetchingAccessToken) {
    isAlreadyFetchingAccessToken = true;
    api
      .post('/refresh-token')
      .then(access_token => {
        const { token } = access_token.data;
        store.dispatch(authRefreshToken(token));
        isAlreadyFetchingAccessToken = false;
        onAccessTokenFetched(token);
      })
      .catch(() => {
        store.dispatch(authRequestLogout());
      });
  }

  const retryOriginalRequest = new Promise(resolve => {
    addSubscriber(access_token => {
      console.tron.warn(access_token);
      api.defaults.headers.Authorization = `Bearer ${access_token}`;
      originalRequest.headers.Authorization = `Bearer ${access_token}`;
      console.tron.log(originalRequest);
      resolve(axios(originalRequest));
    });
  });
  return retryOriginalRequest;
};

api.interceptors.response.use(successResponse, errorResponse);

export default api;
