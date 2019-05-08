import React from "react";
import {Provider} from "react-redux";
import "./App.css";
import Booking from "./Booking";
import configureStore from "./store";
import {actions} from "./actions";
import {addDays} from "date-fns";

const now = new Date().toISOString()
const store = configureStore();
store.dispatch(actions.loadReservations(now, addDays(now, 5)))
function App() {
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
}

export default App;
