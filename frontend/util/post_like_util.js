export const createPostLike = (postLike) => {
  return $.ajax({
    url: '/api/post_likes',
    type: 'post',
    data: {post_like: postLike},
  });
};

export const deletePostLike = (id) => {
  return $.ajax({
    url: `/api/post_likes/${id}`,
    type: 'delete',
  });
};