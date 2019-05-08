import React, {Component} from "react";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import {connect} from "react-redux";
import {actions} from "./actions";

class Booking extends Component {
  render() {
    const {
      timeslotId,
      date,
      roomId,
      apartmentId,
      setApartmentId,
      setRoomId,
      setTimeslot,
      createReservation,
      reservations
    } = this.props;
    return (
      <div className="App container mx-auto">
        <div className="flex flex-row py-4">
          <div className="w-1/4 md:mr-4">
            <BookingForm
              setApartmentId={setApartmentId}
              setRoomId={setRoomId}
              roomId={roomId}
              apartmentId={apartmentId}
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
  return {...state};
};

const mapDispatchToProps = dispatch => {
  return {
    setApartmentId: id => dispatch(actions.setApartmentId(id)),
    setRoomId: id => dispatch(actions.setRoomId(id)),
    setTimeslot: ({timeslotId, date}) =>
      dispatch(actions.setTimeslot({timeslotId, date})),
    createReservation: () => {
      dispatch(actions.createReservation());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
