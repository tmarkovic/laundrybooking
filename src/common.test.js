import { generateBookableIntervals } from "./common";

it("generates five time slots", () => {
  let res = generateBookableIntervals(15, 5, 7);
  expect(res.length).toBe(5);
});

it("interval starts at 07:00 and ends at 22:00", () => {
  let res = generateBookableIntervals(15, 5, 7);
  expect(res[0].start).toBe(7);
  expect(res[res.length - 1].end).toBe(22);
});
