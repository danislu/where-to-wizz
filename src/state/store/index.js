import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducers } from './../ducks';
import { default as middleware, history as historY } from './middleware';

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const rootReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

export const store = createStoreWithMiddleware(rootReducer, {});
export const history = historY;
