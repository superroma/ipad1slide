import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './App';
import slideshowApp from './reducers'

import './index.css';

let store = createStore(slideshowApp, window.devToolsExtension && window.devToolsExtension())
if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;
      store.replaceReducer(nextReducer);
    });
}

render(
  <Provider store={store}>     
    <App />
  </Provider>,
  document.getElementById('root')
);
