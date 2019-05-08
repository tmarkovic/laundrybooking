import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

// Logger with default options
import logger from "redux-logger";
import reducer from "./reducer";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxThunk, logger)
    )
  );
  return store;
}
