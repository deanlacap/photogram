export const createPost = (post) => {
  return $.ajax({
    method: `post`,
    url: `/api/posts`,
    data: {post: post},
  });
};

export const allPosts = () => {
  return $.ajax({
    method: `get`,
    url: `/api/posts`,
  });
};

export const showPost = (id) => {
  return $.ajax({
    method: `get`,
    url: `/api/posts/${id}`,
  });
};

export const editPost = (post) => {
  return $.ajax({
    method: `patch`,
    url: `/api/posts/${post.id}`,
    data: {post: post},
  });
}
;
export const deletePost = (id) => {
  return $.ajax({
    method: `delete`,
    url: `/api/posts/${id}`,
  });
};



