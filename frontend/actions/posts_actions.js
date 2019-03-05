import * as PostApiUtil from '../util/posts_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

const receiveAllPosts = (posts) => {
  return ({
    type: RECEIVE_ALL_POSTS,
    posts
  });
};

const receivePost = (post) => {
  return ({
    type: RECEIVE_POST,
    post: post
  });
};

const removePost = (id) => {
  return ({
    type: REMOVE_POST,
    id: id
  });
};

export const fetchAllPosts = () => (dispatch) => {
  return PostApiUtil.fetchAllPosts()
    .then( (posts) => dispatch(receiveAllPosts(posts)) );
};

export const fetchPost = (id) => (dispatch) => {
  return PostApiUtil.fetchPost(id)
    .then( (post) => dispatch(receivePost(post)) );
};

export const createPost = (post) => (dispatch) => {
  // debugger 
  return PostApiUtil.createPost(post)
    .then( (post) => dispatch(receivePost(post)) );
};

export const editPost = (post) => (dispatch) => {
  return PostApiUtil.editPost(post) 
    .then( (post) => dispatch(receivePost(post)) );
};

export const deletePost = (id) => (dispatch) => {
  return PostApiUtil.deletePost(id) 
    .then( () => dispatch(removePost(id)) );
};