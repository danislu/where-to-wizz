import {
  CURRENT_POSSITION_UPDATED,
  REGION_CHANGED,
  REGION_CHANGING,
} from './types';

const actionCreator = (type, payload) => ({ type, payload });

export const updateCurrentPosition = payload => actionCreator(CURRENT_POSSITION_UPDATED, payload);
export const regionChanging = payload => actionCreator(REGION_CHANGING, payload);
export const regionChanged = payload => actionCreator(REGION_CHANGED, payload);
