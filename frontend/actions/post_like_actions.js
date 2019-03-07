import * as PostLikeApiUtil from '../util/post_like_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";

const receiveAllLikes = (likes) => {
  return ({
    type: RECEIVE_ALL_LIKES,
    likes: likes,
  });
};

const receiveLike = (like) => {
  return ({
    type: RECEIVE_LIKE,
    like: like,
  });
};

const removeLike = (id) => {
  return ({
    type: REMOVE_LIKE,
    id: id,
  });
};

export const createPostLike = (like) => (dispatch) => {
  PostLikeApiUtil.createPostLike(like) 
    .then( (like) => dispatch(receiveLike(like)) );
};

export const deletePostLike = (id) => (dispatch) => {
  PostLikeApiUtil.deletePostLike(id)
    .then( (id) => dispatch(removeLike(id)) );
};

export const fetchAllPostLikes = () => (dispatch) => {
  PostLikeApiUtil.fetchAllPostLikes()
    .then( (likes) => dispatch(receiveAllLikes(likes)) );
}