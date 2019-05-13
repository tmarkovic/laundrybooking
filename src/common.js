/**
 * Generate a set of intervals from the sum intervals
 *
 * @param {number} length
 * @param {*} slices
 * @param {*} start
 */
const generateBookableIntervals = (length = 15, slices = 5, start = 7) => {
  let sliceLength = length / slices;
  return [...Array(slices).keys()].map(x => ({
    start: x ? x * sliceLength + start : start,
    end: x ? x * sliceLength + (start + sliceLength) : start + sliceLength
  }));
};

const formatHour = hour => (hour < 10 ? `0${hour}:00` : `${hour}:00`);

export { generateBookableIntervals, formatHour };
