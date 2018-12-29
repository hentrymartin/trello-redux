import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';

const store = createStore(Reducers, {});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);
