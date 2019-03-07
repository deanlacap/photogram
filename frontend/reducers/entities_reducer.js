import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import postLikesReducer from './post_likes_reducer';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  postLikes: postLikesReducer,
});