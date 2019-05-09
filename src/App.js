import React from "react";
import {Provider} from "react-redux";
import "./App.css";
import Booking from "./Booking";
import configureStore from "./store";
import {actions} from "./actions";
import {addDays, format, subDays} from "date-fns";

const now = new Date();
const store = configureStore();
store.dispatch(actions.loadReservations(format(subDays(now, 1), 'YYYY-MM-DD'), format(addDays(now, 5), 'YYYY-MM-DD')));
function App() {
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
}

export default App;
