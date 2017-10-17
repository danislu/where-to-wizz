import mapReducer, { /*epics as mapEpic,*/ operations as mapOp } from './map';
import markersReducer, { epics as markerEpic } from './markers';
import { startUp, shoutDown, epics as appEpics } from './app';
import filterReducer, { changeFilter } from './filters';

export const epics = [
  appEpics,
  // mapEpic,
  markerEpic
];

export const operations = {
  startUp,
  shoutDown,
  mapChanging: mapOp.regionChanging,
  changeFilter
};

export const reducers = {
  map: mapReducer,
  markers: markersReducer,
  filters: filterReducer
};
