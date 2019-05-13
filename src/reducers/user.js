import { types } from "../actions/user";

const initialState = {
  email: "",
  accessToken: "",
  id: null,
  isAuthenticated: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_AUTHENTICATED_USER:
      return { ...state, ...payload };
    case types.SET_AUTHENTICATED:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};
