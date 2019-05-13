import { authenticateUser, validateAccessToken } from "../api/user";
import jwt_decode from "jwt-decode";
import { push } from "connected-react-router";

const types = {
  SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER",
  SET_AUTHENTICATED: "SET_AUTHENTICATED"
};

const actions = {
  setUser: ({ email, accessToken, id }) => ({
    type: types.SET_AUTHENTICATED_USER,
    payload: { email, accessToken, id }
  }),

  setAuthenticated: isAuthenticated => ({
    type: types.SET_AUTHENTICATED,
    payload: { isAuthenticated }
  }),

  fetchUserFromLS: () => (dispatch, getState) => {
    let accessToken = localStorage.getItem("accessToken");
    try {
      let user = jwt_decode(accessToken);
      dispatch(
        actions.setUser({
          email: user.email,
          id: user.sub
        })
      );
    } catch {
      dispatch(actions.resetAccessToken());
    }
  },
  authenticateUser: ({ email, password }) => async (dispatch, getState) => {
    let response = await authenticateUser({ email, password });
    if (response) {
      localStorage.setItem("accessToken", response.accessToken);
      let user = jwt_decode(response.accessToken);
      dispatch(
        actions.setUser({
          email: user.email,
          id: user.sub
        })
      );
      dispatch(push("/booking"));
    } else {
      alert("Invalid credentials");
    }
  },
  validateAccessToken: () => async dispatch => {
    let isAuthenticated = await validateAccessToken();
    dispatch(actions.setAuthenticated({ isAuthenticated }));
  },
  resetAccessToken: () => dispatch => {
    localStorage.removeItem("accessToken");
    dispatch(actions.setUser({ email: null, id: null }));
  },
  logout: () => dispatch => {
    dispatch(actions.resetAccessToken());
    dispatch(push("/"));
  }
};

export { types, actions };
