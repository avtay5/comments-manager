import { fetchAPI, getUrl } from './fetches';

const METHOD = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

export default {
  posts: {
    getPosts: () => fetchAPI(METHOD.GET, getUrl('posts')),
    getPost: id => fetchAPI(METHOD.GET, getUrl(`posts/${id}`)),
  },
  comments: {
    getPostComments: id =>
      fetchAPI(METHOD.GET, getUrl(`comments?postId=${id}`)),
  },
};
