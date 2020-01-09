export function statusBarHide(hidden) {
  return {
    type: '@settings/STATUS_BAR_HIDE',
    payload: { hidden },
  };
}

export function screenOrientation(orientation) {
  return {
    type: '@settings/SCREEN_ORIENTATION',
    payload: { orientation },
  };
}
