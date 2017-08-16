export const START_UP = 'START_UP';
export const SHOUT_DOWN = 'SHOUT_DONW';

export const PERMISSION_CHANGED = 'PERMISSION_CHANGED';
export const PERMISSION_GRANTED = 'PERMISSION_GRANTED';

export const startUp = () => ({
  type: START_UP
});

export const shoutDown = () => ({
  type: SHOUT_DOWN
});

export const permissionChanged = (permission, response, requested = false) => ({
  type: PERMISSION_CHANGED,
  payload: {
    permission,
    response,
    requested
  }
});

export const permissionGranted = permission => ({
  type: PERMISSION_GRANTED,
  payload: permission
});
