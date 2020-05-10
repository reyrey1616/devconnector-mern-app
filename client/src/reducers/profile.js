import { GET_PROFILE, PROFILE_ERROR } from '../actions/types';
const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //     case SET_ALERT:
    //       return [...state, payload];

    default:
      return state;
  }
}
