import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from './types';
import axios from 'axios';
import { setAlert } from './alert';

// GET ALL POST
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// ADD LIKE
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/like/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// REMOVE LIKE
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/dislike/${postId}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
