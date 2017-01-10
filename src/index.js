import 'core-js/fn/object/assign';
// import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';
import { todoApp } from './reducers/index';
import App from './components/Main';

let store = creatStore(todoApp);
// Render the main component into the dom
render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('app')
);
