import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/REFRESH_TOKEN': {
        draft.token = action.payload.token;
        break;
      }
      case '@auth/FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.signed = false;
        draft.token = null;
        break;
      }
      default:
        return draft;
    }
  });
}
