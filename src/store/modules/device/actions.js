export function deviceRequest({ deviceName, deviceToken }) {
  return {
    type: '@device/REQUEST',
    payload: { deviceName, deviceToken },
  };
}

export function deviceRegister() {
  return {
    type: '@device/REGISTER',
    payload: {},
  };
}

export function deviceRemove() {
  return {
    type: '@token/REMOVE',
    payload: {},
  };
}
