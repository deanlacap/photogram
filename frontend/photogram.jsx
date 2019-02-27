import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});


//Delete Me - Test Only
window.SessionApi = SessionApi;
