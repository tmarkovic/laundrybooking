import { authenticateUser } from "../api/user";
import jwt_decode from "jwt-decode";

const types = {
  SET_AUTHENTICATED_USER: "SET_AUTHENTICATED_USER",
  AUTHENTICATE_USER: "AUTHENTICATE_USER"
};

const actions = {
  setUser: ({ email, accessToken, id }) => ({
    type: types.SET_AUTHENTICATED_USER,
    payload: { email, accessToken, id }
  }),
  authenticateUser: ({ email, password }) => async (dispatch, getState) => {
    let response = await authenticateUser({ email, password });
    let user = jwt_decode(response.accessToken);
    dispatch(
      actions.setUser({
        email: user.email,
        accessToken: response.accessToken,
        id: user.sub
      })
    );
  }
};

export { types, actions };
