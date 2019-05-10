import React, { Component } from "react";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import { connect } from "react-redux";
import { actions } from "./actions/reservation";

class Booking extends Component {
  render() {
    const {
      timeslotId,
      date,
      roomId,
      setRoomId,
      setTimeslot,
      createReservation,
      reservations
    } = this.props;
    return (
      <div className="App container mx-auto">
        <div className="flex flex-col-reverse py-4 md:flex-row">
          <div className="w-full md:w-1/4 md:mr-4 mt-4 md:mt-0">
            <BookingForm
              setRoomId={setRoomId}
              date={date}
              roomId={roomId}
              createReservation={createReservation}
            />
          </div>
          <div className="w-full">
            <Calendar
              timeslotId={timeslotId}
              date={date}
              setTimeslot={setTimeslot}
              reservations={reservations}
              roomId={roomId}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.booking };
};

const mapDispatchToProps = dispatch => {
  return {
    setRoomId: id => dispatch(actions.setRoomId(id)),
    setTimeslot: ({ timeslotId, date }) =>
      dispatch(actions.setTimeslot({ timeslotId, date })),
    createReservation: () => {
      dispatch(actions.createReservation());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
