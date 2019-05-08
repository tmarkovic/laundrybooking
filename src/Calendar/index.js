import React, {Component} from "react";
import Header from "./header";
import {eachDay, addDays, format} from "date-fns";
import {generateBookableIntervals} from "../common";

const now = new Date();
const dates = eachDay(now, addDays(now, 5)).map(date => ({
  fullDateString: date.toISOString(),
  day: format(date, "ddd"),
  dateMonth: format(date, "MMM Do")
}));
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeslotId: 0, date: ''
    }
  }

  handleTimeslotClicked = (timeslotId, date) => (e) => {
    this.setState({timeslotId, date})
  }
  render() {
    return (
      <div className="flex flex-col sm:flex-row justify-around">{this.renderDates(dates)}</div>
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
    return generateBookableIntervals().map((x, i) => (
      <div key={i} onClick={this.handleTimeslotClicked(i, dateString)} className="cursor-pointer text-center flex-shrink hover:bg-orange-light bg-blue text-white mb-1 px-2 py-4 mr-1 sm:mr-0">
        {x.start < 10 ? '0' : ''}{x.start}:00 - {x.end}:00
    </div>
    ));
  }
}




