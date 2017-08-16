import reducers from './reducers';
import { regionChanging } from './actions';

export { default as epics } from './epics';

export const operations = {
  regionChanging
};

export default reducers;
