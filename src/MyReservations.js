import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./actions/reservation";
import { generateBookableIntervals, formatHour } from "./common";

class MyReservations extends Component {
  constructor(props) {
    super(props);
    this.timeSlots = generateBookableIntervals();
  }

  handleDeleteReservation = reservationId => e => {
    this.props.deleteReservation(reservationId);
  };
  componentDidMount() {
    const { fetchReservations, userId } = this.props;
    fetchReservations(userId);
  }
  render() {
    console.log(this.props);
    return (
      <div className="container mx-auto">
        {this.renderReservationTable(this.props.reservations)}
      </div>
    );
  }

  renderReservationTable(reservations) {
    return (
      <div className="mt-6">
        <h1>My Reservations</h1>
        <table className="w-full text-left table-collapse mt-6">
          <thead>
            <tr>
              <th className="text-lg font-semibold text-grey-darker p-2 bg-grey-lightest">
                Date
              </th>
              <th className="text-lg font-semibold text-grey-darker p-2 bg-grey-lightest">
                Time
              </th>
              <th className="text-lg font-semibold text-grey-darker p-2 bg-grey-lightest">
                Laundry room
              </th>
              <th className="text-lg font-semibold text-grey-darker p-2 bg-grey-lightest">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            {reservations.map((reservation, i) => {
              console.log(this.handleDeleteReservation);
              return (
                <tr key={i}>
                  <td className="p-2 border-t border-grey-light  whitespace-no-wrap">
                    {reservation.date}
                  </td>
                  <td className="p-2 border-t border-grey-light  whitespace-pre">
                    {formatHour(this.timeSlots[reservation.timeslotId].start)} -{" "}
                    {formatHour(this.timeSlots[reservation.timeslotId].end)}
                  </td>
                  <td className="p-2 border-t border-grey-light  whitespace-pre">
                    {reservation.roomId}
                  </td>
                  <td className="p-2 border-t border-grey-light whitespace-pre">
                    <button
                      onClick={this.handleDeleteReservation(reservation.id)}
                      className="bg-red text-white text-sm p-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ booking, user }) => ({
  reservations: booking.reservations,
  userId: user.id
});

const mapDispatchToProps = dispatch => ({
  fetchReservations: (userId) => {
    dispatch(actions.loadReservations(userId));
  },
  deleteReservation: reservationId => {
    dispatch(actions.deleteReservation(reservationId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyReservations);
