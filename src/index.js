import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import rootNode from './rootNode';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
  ReactDOM.render(
    (<AppContainer warnings={false}><Component /></AppContainer>),
    document.getElementById('root'),
  );
}

render(rootNode);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./rootNode', () => { render(rootNode); });
}

registerServiceWorker();
