import produce from 'immer';

const INITIAL_STATE = {
  deviceName: null,
  deviceToken: null,
  loading: false,
};

export default function Device(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@device/REQUEST': {
        const { deviceName, deviceToken } = action.payload;
        draft.loading = true;
        draft.deviceToken = deviceToken;
        draft.deviceName = deviceName;
        break;
      }
      case '@device/REGISTER': {
        draft.loading = false;
        break;
      }
      case '@device/REMOVE': {
        draft.deviceToken = null;
        draft.deviceName = null;
        draft.loading = false;
        break;
      }
      default:
        return draft;
    }
  });
}
