import axios from 'axios';

// Set the token into the header as x-auth-token to use it every API request
const setAuthToken = (token) => {
  if (token) {
    axios.default.headers.common['x-auth-token'] = token;
  } else {
    delete axios.default.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
