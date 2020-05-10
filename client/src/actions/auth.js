import { v4 as uuidv4 } from 'uuid';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';
import { setAlert } from './alert';
import axios from 'axios';

// REGISTER USER
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((item) => dispatch(setAlert(item.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
