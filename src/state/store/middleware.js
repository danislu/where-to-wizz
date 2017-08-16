import { combineEpics, createEpicMiddleware } from 'redux-observable';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import { createLogger } from 'redux-logger';
import { createMemoryHistory as createHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

import { epics } from './../ducks';

export const history = createHistory();
const rootEpic = combineEpics(...epics);

export default [
  // createLogger(),
  routerMiddleware(history),
  reduxImmutableStateInvariant(),
  createEpicMiddleware(rootEpic)
];
