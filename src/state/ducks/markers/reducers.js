import { combineReducers } from 'redux';
import { ADD_MARKER, CLEAR_MARKERS, SET_DISTANSE_TO_MARKER } from './types';

const getDistance = ({ id, distance }, theId, newDistance) => {
  if (id === theId) {
    return newDistance;
  }
  return distance;
};

const distances = (state = {}, { type, payload }) => {
  switch (type) {
    case SET_DISTANSE_TO_MARKER:
      return {
        ...state,
        [payload.marker.id]: payload.distance
      };
    default:
      return state;
  }
};

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_MARKER:
      return [...state, payload];
    case CLEAR_MARKERS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  items,
  distances
});
