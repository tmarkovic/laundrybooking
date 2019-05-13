import React from "react";
import {Provider} from "react-redux";
import "./App.css";
import NavBar from "./NavBar";
import configureStore from "./store";
import {actions as userActions} from "./actions/user";
import routes from "./routeConfig";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import BookingPage from "./BookingPage";

const now = new Date();
const store = configureStore();
store.dispatch(userActions.fetchUserFromLS());
// store.dispatch(
//   actions.loadReservations(
//     format(subDays(now, 1), "YYYY-MM-DD"),
//     format(addDays(now, 5), "YYYY-MM-DD")
//   )
// );
function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/booking" component={BookingPage} />
      </Router>
    </Provider>
  );
}

export default App;
