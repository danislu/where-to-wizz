import {
  GET_MARKERS,
  ADD_MARKER,
  SET_ACTIVE_MARKER2,
  SET_DISTANSE_TO_MARKER
} from './types';

export const getMarkers = () => ({
  type: GET_MARKERS
});

export const addMarker = marker => ({
  type: ADD_MARKER,
  payload: marker
});

export const selectMarker2 = marker => ({
  type: SET_ACTIVE_MARKER2,
  payload: marker
});

export const setDistanceToMarker = (marker, distance) => ({
  type: SET_DISTANSE_TO_MARKER,
  payload: {
    marker,
    distance
  }
});
