// === All other reducers are to be imported to and exposed from here. ===
import { combineReducers } from 'redux-immutable';

import app from './app';
import router from './router';
import user from './user';

const combined = combineReducers({
  app,
  router,
  user,
});

export default combined;
