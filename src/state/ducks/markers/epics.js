import { combineEpics } from 'redux-observable';
import { addMarker, setDistanceToMarker } from './actions';
import { CURRENT_POSSITION_UPDATED } from './../map/types';
import { START_UP } from './../app';
import { getData } from './../../../data';

const toRadians = (degrees) => {
  const pi = Math.PI;
  return degrees * (pi / 180);
};

const distanceBetween = (posA, posB) => {
  const R = 6371e3; // metres
  const φ1 = toRadians(posA.latitude);
  const φ2 = toRadians(posB.latitude);
  const Δφ = toRadians(posB.latitude - posA.latitude);
  const Δλ = toRadians(posB.longitude - posA.longitude);
  const a = (Math.sin(Δφ / 2) * Math.sin(Δφ / 2)) +
    (Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2));
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  const result = Math.round(d);
  return result;
};

const getMarkersEpic = action$ => action$.ofType(START_UP)
  .mergeMap(() => getData())
  .map(addMarker);

const updateMarkerDistanceFromUserEpic = (action$, store) =>
  action$.ofType(CURRENT_POSSITION_UPDATED)
    .flatMap(action => store.getState().markers.items.map(marker => ({ action, marker })))
    .map(({ action, marker }) => ({
      marker,
      distance: distanceBetween(action.payload, marker.pos)
    }))
    .map(({ marker, distance }) => setDistanceToMarker(marker, distance));

export default combineEpics(
  getMarkersEpic,
  updateMarkerDistanceFromUserEpic
);
