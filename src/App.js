import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import NavBar from "./NavBar";
import configureStore from "./store";
import { actions } from "./actions/reservation";
import { addDays, format, subDays } from "date-fns";
import routes from "./routeConfig";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const now = new Date();
const store = configureStore();
store.dispatch(
  actions.loadReservations(
    format(subDays(now, 1), "YYYY-MM-DD"),
    format(addDays(now, 5), "YYYY-MM-DD")
  )
);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />

        {routes.map((route, i) => (
          <Route key={i} {...route} />
        ))}
      </Router>
    </Provider>
  );
}

export default App;
