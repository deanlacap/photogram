export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user: user},
  });
};

export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'post',
    data: {user: user},
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'delete',
  });
};