import React, { Component } from "react";

export default class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.handleRoomIdChanged = this.handleRoomIdChanged.bind(this);
    this.handleCreateReservation = this.handleCreateReservation.bind(this);
  }

  handleRoomIdChanged(e) {
    this.props.setRoomId(parseInt(e.target.value));
  }

  handleCreateReservation(e) {
    this.props.createReservation();
  }

  render() {
    const { roomId, date } = this.props;
    return (
      <div className="flex h-full items-left mb-4 md:flex flex-col">
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
                roomId === 1 ? "btn-toggle-active" : "btn-toggle-inactive"
              }  btn-toggle btn-toggle-first`}
            >
              Room 1
            </button>
            <button
              onClick={this.handleRoomIdChanged}
              value="2"
              className={`${
                roomId === 2 ? "btn-toggle-active" : "btn-toggle-inactive"
              }  btn-toggle btn-toggle-last`}
            >
              Room 2
            </button>
          </div>
        </div>

        <div className="flex w-full mt-auto">
          <button
            onClick={this.handleCreateReservation}
            disabled={!date}
            className={` ${
              !date ? "opacity-50" : "hover:bg-teal-dark"
            } block bg-teal text-white uppercase text-md mx-auto p-4 rounded disabled`}
            type="submit"
          >
            Book time
          </button>
        </div>
      </div>
    );
  }
}
