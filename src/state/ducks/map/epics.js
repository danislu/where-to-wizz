import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { updateCurrentPosition, regionChanged } from './actions';
import { REGION_CHANGING } from './types';
import { SHOUT_DOWN, PERMISSION_CHANGED } from './../app';

let watchId;
const add = (h) => {
  watchId = navigator.geolocation.watchPosition(p => h(p)); 
}
const remove = () => navigator.geolocation.clearWatch(watchId);

const watchPositionEpic = action$ =>
  action$.ofType(PERMISSION_CHANGED)
    .filter(action => action.payload.permission === 'location')
    .filter(action => action.payload.response === 'authorized')
    .mergeMap(() => Observable.fromEventPattern(add, remove)
      .map(pos => updateCurrentPosition({
        ...pos.coords
      }))
      .takeUntil(action$.ofType(SHOUT_DOWN)));

const regionChangingEpic = action$ =>
  action$.ofType(REGION_CHANGING)
    .debounceTime(1000)
    .map(({ payload }) => regionChanged(payload));

export default combineEpics(
  watchPositionEpic,
  regionChangingEpic
);
