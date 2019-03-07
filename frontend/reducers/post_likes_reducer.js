import { RECEIVE_LIKE, REMOVE_LIKE, RECEIVE_ALL_LIKES } from '../actions/post_like_actions';

const postLikesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_LIKES:

    return action.likes;
    case RECEIVE_LIKE:

    return newState[action.like.id] = action.like;
    case REMOVE_LIKE:
    delete newState[action.like.id];
    
    return newState;
  }

  return oldState;
};

export default postLikesReducer;