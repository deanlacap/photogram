import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session_util';
import configureStore from './store/store';
import Root from './components/root';
import { deleteSession} from './util/session_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;

  ReactDOM.render(<Root store={store} />, root);
});


//Delete Me - Test Only
window.SessionApi = SessionApi;
window.logout = deleteSession;

