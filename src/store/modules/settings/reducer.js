import produce from 'immer';

const INITIAL_STATE = {
  screen: {
    orientation: 'PORTRAIT',
    drawer: 'left',
  },
  statusBar: {
    hidden: false,
    // translucent: true,
  },
};

export default function settings(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SUCCESS': {
        draft.statusBar.hidden = false;
        break;
      }
      case '@settings/STATUS_BAR_HIDE': {
        const { hidden } = action.payload;
        draft.statusBar.hidden = hidden;
        break;
      }
      case '@settings/SCREEN_ORIENTATION': {
        const { orientation } = action.payload;
        draft.screen.orientation = orientation.toUpperCase() || 'PORTRAIT';
        break;
      }
      default:
    }
  });
}
