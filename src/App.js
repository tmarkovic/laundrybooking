import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Booking from "./Booking";
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Booking />
    </Provider>
  );
}

export default App;
