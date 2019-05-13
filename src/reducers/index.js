import { combineReducers } from "redux";
import booking from "./booking";
import user from "./user";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({ booking, user, router: connectRouter(history) });
