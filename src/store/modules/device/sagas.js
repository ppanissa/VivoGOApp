import { all, call, takeLatest, put } from 'redux-saga/effects';
import api from '~/services/api';
import apiRoutes from '~/services/apiRoutes';
import { deviceRegister } from './actions';

export function* deviceRequest({ payload }) {
  try {
    const { API_POST_EXPO_TOKEN_CREATE } = yield apiRoutes();

    const { deviceName: nome_aparelho, deviceToken: token_expo } = payload;

    const { data } = yield call(api.post, API_POST_EXPO_TOKEN_CREATE, {
      token_expo,
      nome_aparelho,
    });

    console.tron.logImportant(data);
    put(deviceRegister());
  } catch (e) {
    console.tron.error(e);
  }
}

export default all([takeLatest('@device/REQUEST', deviceRequest)]);
