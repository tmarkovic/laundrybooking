import React, { Component } from "react";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.handleApartmentCodeChanged = this.handleApartmentCodeChanged.bind(
      this
    );
    this.handleRoomIdChanged = this.handleRoomIdChanged.bind(this);
    this.handleCreateReservation = this.handleCreateReservation.bind(this);
  }

  handleRoomIdChanged(e) {
    this.props.setRoomId(parseInt(e.target.value));
  }

  handleApartmentCodeChanged(e) {
    this.props.setApartmentId(e.target.value);
  }

  handleCreateReservation(e) {
    this.props.createReservation();
  }

  render() {
    const { roomId } = this.props;
    return (
      <div className="flex h-full items-left mb-4 md:flex flex-col">
        <div className="flex flex-col mb-4 w-full">
          <label
            className="mb-2 uppercase text-left font-bold text-md text-grey-darkest"
            htmlFor="apartment_code"
          >
            apartment code
          </label>
          <input
            onChange={this.handleApartmentCodeChanged}
            type="text"
            className="border py-2 px-3 text-grey-darkest"
            name="apartment_code"
            id="apartment_code"
          />
        </div>

        <div className="flex flex-col mb-4 w-full">
          <label
            className="mb-2 text-left uppercase font-bold text-md text-grey-darkest"
            htmlFor="roomid"
          >
            Laundry room
          </label>
          <div className="inline-flex">
            <button
              onClick={this.handleRoomIdChanged}
              value="1"
              className={`${
                roomId === 1
                  ? "bg-green-light hover:bg-green"
                  : "bg-grey-light hover:bg-green"
              }  text-grey-darkest font-bold py-2 px-4 rounded-l`}
            >
              Room 1
            </button>
            <button
              onClick={this.handleRoomIdChanged}
              value="2"
              className={`${
                roomId === 2
                  ? "bg-green-light hover:bg-green"
                  : "bg-grey-light hover:bg-green"
              }  text-grey-darkest font-bold py-2 px-4 rounded-r`}
            >
              Room 2
            </button>
          </div>
        </div>

        <div className="flex w-full mt-auto">
          <button
            onClick={this.handleCreateReservation}
            className="block bg-teal hover:bg-teal-dark text-white uppercase text-md mx-auto p-4 rounded"
            type="submit"
          >
            Book time
          </button>
        </div>
      </div>
    );
  }
}
