import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

export const history = createHistory();
const logger = createLogger({
  level: 'log',
  stateTransformer: (state) => state.toJS(),
});

const middlewares = [routerMiddleware(history), thunkMiddleware, logger];

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middlewares),
);

export default store;
