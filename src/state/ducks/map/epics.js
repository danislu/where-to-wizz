import { DeviceEventEmitter } from 'react-native';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import { updateCurrentPosition, regionChanged } from './actions';
import { REGION_CHANGING } from './types';
import { SHOUT_DOWN, PERMISSION_CHANGED } from './../app';
import { RNLocation as Location } from 'NativeModules';

let subscription;
const add = (h) => {
  Location.startUpdatingLocation();
  subscription = DeviceEventEmitter.addListener('locationUpdated', (location) => h({ coords: location }));
};
const remove = () => {
  DeviceEventEmitter.removeListener('locationUpdated', subscription);
  Location.stopUpdatingLocation();
}

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
