import { AsyncStorage } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';
import { authFailure, authSuccess, authLogout } from './actions';
import { deviceRequest, deviceRemove } from '../device/actions';
import { store } from '~/store';

export function* authententicateRequest({ payload }) {
  try {
    const { login, senha, uf, device } = payload;

    const response = yield call(api.post, `/login/syscor/${uf}`, {
      login,
      senha,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield AsyncStorage.setItem('@VivoGO:UF', uf);

    yield all([put(authSuccess(token)), put(deviceRequest(device))]);

    // yield put(authSuccess(token));
  } catch (e) {
    yield put(authFailure(e));
  }
}

export function* authententicateRequestLogout() {
  try {
    const { deviceToken: token_expo } = store.getState().device;

    console.tron.warn(token_expo);

    const { API_POST_EXPO_TOKEN_DELETE } = yield apiRoutes();

    const { data } = yield call(api.post, API_POST_EXPO_TOKEN_DELETE, {
      token_expo,
    });
    console.tron.logImportant(data);
    yield all([put(authLogout()), put(deviceRemove())]);
  } catch (e) {
    yield put(authLogout());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/REQUEST', authententicateRequest),
  takeLatest('@auth/REQUEST_LOGOUT', authententicateRequestLogout),
]);
