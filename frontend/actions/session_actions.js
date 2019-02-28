import * as SessionApiUtil from '../util/session_util';

// export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user: user,
  });
};

const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  });
};

const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors 
  });
};

export const clearErrors = () => {
  return({
    type: REMOVE_SESSION_ERRORS,
    errors: []
  });
};

export const createNewUser = (userForm) => (dispatch) => {
  return SessionApiUtil.postUser(userForm) 
    .then( 
      user => dispatch(receiveCurrentUser(user)), 
      errors => dispatch(receiveErrors(errors.responseJSON))
    );
};

export const login = (userForm) => (dispatch) => {
  return SessionApiUtil.postSession(userForm) 
    .then( 
      user => dispatch(receiveCurrentUser(user)), 
      errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.deleteSession() 
    .then ( () => dispatch(logoutCurrentUser()) );
};