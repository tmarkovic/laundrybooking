import {authenticateUser, authorizeUser} from "../api/user";
import jwt_decode from "jwt-decode";

const types = {
  SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER",
  SET_AUTHORIZED: "SET_AUTHORIZED"
};

const actions = {
  setUser: ({email, accessToken, id}) => ({
    type: types.SET_AUTHENTICATED_USER,
    payload: {email, accessToken, id}
  }),

  setAuthorized: (isAuthorized) => ({
    type: types.SET_AUTHORIZED,
    payload: {isAuthorized}
  }),

  fetchUserFromLS: () => (dispatch, getState) => {
    let accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      let user = jwt_decode(accessToken);
      dispatch(actions.setUser({
        email: user.email,
        id: user.sub
      }));
    }
  },
  authenticateUser: ({email, password}) => async (dispatch, getState) => {
    let response = await authenticateUser({email, password});
    localStorage.setItem('accessToken', response.accessToken)
    let user = jwt_decode(response.accessToken);
    dispatch(
      actions.setUser({
        email: user.email,
        id: user.sub
      })
    );
  },
  authorizeUser: () => async (dispatch) => {
    let isAuthorized = await authorizeUser();
    dispatch(actions.setAuthorized({isAuthorized}))
  },
  resetAccessToken: () => (dispatch) => {
    localStorage.removeItem('accessToken');
    dispatch(actions.setUser({email: null, id: null}))
  }
};

export {types, actions};
