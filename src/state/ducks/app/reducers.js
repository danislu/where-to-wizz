import { PERMISSION_CHANGED } from './actions';

const init = {
  location: 'denied'
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case PERMISSION_CHANGED:
      return {
        ...state,
        [payload.permission]: payload.response
      };
    default:
      break;
  }
  return state;
};
