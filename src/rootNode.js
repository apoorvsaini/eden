import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import './styles.css';
import App from './scenes/App/';

import store, { history } from './store';

const rootNode = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default rootNode;
