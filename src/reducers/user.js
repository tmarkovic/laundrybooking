import { types } from "../actions/user";

const initialState = {
  email: "",
  accessToken: "",
  id: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_AUTHENTICATED_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
