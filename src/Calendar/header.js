import React from "react";
import {eachDay, addDays, format} from "date-fns";
import {generateBookableIntervals} from "../common";

const now = new Date();
const dates = eachDay(now, addDays(now, 5)).map(date => ({
  day: format(date, "ddd"),
  dateString: format(date, "MMM Do")
}));

function header(props) {
  return <div>
    {props.children}
    <div className="flex flex-col sm:flex-row justify-around">{renderDates(dates)}</div>;
  </div>
}

const renderDates = dates => {
  return dates.map((date, i) => (
    <div className="flex flex-row sm:flex-col mr-1 w-full flex-wrap" key={i}>
      <div className="flex flex-col sm:flex-col mb-2 sm:w-full flex-grow w-full sm:w-auto sm:flex-no-grow">
        <span className="font-bold text-left">{date.day}</span>
        <span className="text-left">{date.dateString}</span>
      </div>
      {renderTimeSlots()}
    </div>
  ));
};

const renderTimeSlots = () => {
  return generateBookableIntervals().map((x, i) => (
    <div key={i} className="cursor-pointer text-center flex-shrink hover:bg-orange-light bg-blue text-white mb-1 px-2 py-4 mr-1 sm:mr-0">
      {x.start < 10 ? '0' : ''}{x.start}:00 - {x.end}:00
    </div>
  ));
};
export default header;
