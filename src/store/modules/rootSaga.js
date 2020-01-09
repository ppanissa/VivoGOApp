import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import device from './device/sagas';

export default function* rootSaga() {
  return yield all([auth, device]);
}
