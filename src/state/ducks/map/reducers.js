import { combineReducers } from 'redux';
import { CURRENT_POSSITION_UPDATED, REGION_CHANGED, COMMIT_REGION_CHANGE } from './types';

const initCenter = {
  latitude: 60.39197875541822,
  longitude: 5.313919452978548,
};

const initCenterRegion = {
  ...initCenter,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05
};

const INITIAL_STATE = {
  markers: [],
  currentPos: null,
  initalRegion: initCenterRegion
};

function initialRegion(state = INITIAL_STATE.initalRegion, { type, payload }) {
  switch (type) {
    case REGION_CHANGED:
      return payload;
    default:
      return state;
  }
}

function currentPos(state = INITIAL_STATE.currentPos, { type, payload }) {
  switch (type) {
    case CURRENT_POSSITION_UPDATED:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  currentPos,
  initialRegion
});
