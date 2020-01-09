import { combineReducers } from 'redux';

// States Layout
import settings from './settings/reducer';
// Application
import auth from './auth/reducer';
// Device
import device from './device/reducer';

export default combineReducers({
  settings,
  auth,
  device,
});
