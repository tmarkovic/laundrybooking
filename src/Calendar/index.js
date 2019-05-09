import React, {Component} from "react";
import {eachDay, addDays, format} from "date-fns";
import {generateBookableIntervals} from "../common";

const now = new Date();
const dates = eachDay(now, addDays(now, 5)).map(date => ({
  fullDateString: format(date, 'YYYY-MM-DD'),
  day: format(date, "ddd"),
  dateMonth: format(date, "MMM Do")
}));
export default class Calendar extends Component {
  handleTimeslotClicked = (timeslotId, date) => e => {
    this.props.setTimeslot({timeslotId, date});
  };
  render() {
    return (
      <div className="flex flex-col sm:flex-row justify-around">
        {this.renderDates(dates)}
      </div>
    );
  }

  renderDates(dates) {
    return dates.map((date, i) => (
      <div className="flex flex-row sm:flex-col mr-1 w-full flex-wrap" key={i}>
        <div className="flex flex-col sm:flex-col mb-2 sm:w-full flex-grow w-full sm:w-auto sm:flex-no-grow">
          <span className="font-bold text-left">{date.day}</span>
          <span className="text-left">{date.dateMonth}</span>
        </div>
        {this.renderTimeSlots(date.fullDateString)}
      </div>
    ));
  }

  renderTimeSlots(dateString) {
    const {timeslotId, date, reservations, roomId} = this.props;

    return generateBookableIntervals().map((x, i) => {
      let isReserved = reservations.findIndex(reservation => reservation.timeslotId === i && reservation.date === dateString && reservation.roomId === roomId) >= 0
      let bgClass = '';
      if (isReserved) {
        bgClass = 'bg-grey';
      } else if (timeslotId === i && date === dateString) {
        bgClass = 'bg-orange-light'
      } else {
        bgClass = 'bg-blue hover:bg-orange-light cursor-pointer ';
      }
      return (<div
        key={i}
        onClick={!isReserved ? this.handleTimeslotClicked(i, dateString) : undefined}
        className={`${bgClass} text-center flex-shrink text-white mb-1 px-2 py-4 mr-1 sm:mr-0`}
      >
        {x.start < 10 ? "0" : ""}
        {x.start}:00 - {x.end}:00
      </div>
      )
    });
  }
}
