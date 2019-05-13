import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import NavBar from "./NavBar";
import configureStore, { history } from "./store";
import { actions as userActions } from "./actions/user";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import BookingPage from "./BookingPage";
import MyReservations from "./MyReservations";
import Logout from "./Logout";

const store = configureStore();
store.dispatch(userActions.fetchUserFromLS());

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <PrivateRoute path="/booking" component={BookingPage} />
          <PrivateRoute path="/reservations" component={MyReservations} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
