import React from "react";
import {Provider} from 'react-redux';
import "./App.css";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App container mx-auto">
        <div className="flex flex-row py-4">
          <div className="w-1/4 md:mr-4">
            <BookingForm />
          </div>
          <div className="w-full">
            <Calendar />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
