import * as SessionApiUtil from '../util/session';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const REMOVE_SESSION = 'REMOVE_SESSION';

const receiveUser = (user) => {
  return ({
    type: RECEIVE_USER,
    user: user,
  });
};

const receiveSession = (user) => {
  return ({
    type: RECEIVE_SESSION,
    user: user,
  });
};

const removeSession = () => {
  return ({
    type: REMOVE_SESSION,
  });
};

export const 