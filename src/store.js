import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

// Logger with default options
import rootReducer from "./reducers";
export const history = createBrowserHistory();
export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), ReduxThunk))
  );
  return store;
}
