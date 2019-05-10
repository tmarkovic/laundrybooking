import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

// Logger with default options
import logger from "redux-logger";
import rootReducer from "./reducers";


export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(ReduxThunk)
    )
  );
  return store;
}
