import reducers from './reducers';
import { getMarkers, selectMarker2 } from './actions';

export { default as epics } from './epics';

export const operations = {
  startUp: getMarkers,
  selectMarker: selectMarker2
};

export default reducers;
