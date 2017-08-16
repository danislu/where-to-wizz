import { combineEpics } from 'redux-observable';
import { PermissionsAndroid, Permission, Platform } from 'react-native';
import { check, request } from 'react-native-permissions';
import { START_UP, PERMISSION_CHANGED, permissionChanged } from './actions';

const location = 'location';
const checkLocationPermissionEpic = action$ =>
  action$.ofType(START_UP)
    .mergeMap(() => check(location))
    .map(res => permissionChanged(location, res));

const requestLocationPermissionEpic = action$ =>
  action$.ofType(PERMISSION_CHANGED)
    .filter(a => a.payload.permission === 'location')
    .filter(a => a.payload.response !== 'authorize')
    .filter(a => !a.payload.requested)
    .mergeMap(() => request(location))
    .map(res => permissionChanged(location, res, true));

export default combineEpics(
  checkLocationPermissionEpic,
  requestLocationPermissionEpic
);
