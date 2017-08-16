import { CHANGE_FILTER } from './types';

export const changeFilter = ({ id }, value) => ({
  type: CHANGE_FILTER,
  payload: {
    id,
    value
  }
});
