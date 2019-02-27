import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApi from './util/session';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<h1>React is working</h1>, root);
});


//Delete Me - Test Only
window.SessionApi = SessionApi;