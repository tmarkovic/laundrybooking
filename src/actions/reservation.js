import {
  createReservation,
  getReservations,
  deleteReservation
} from "../api/reservations";
import { format, addDays, subDays } from "date-fns";

const types = {
  SET_APARTMENT_ID: "SET_APARTMENT_ID",
  SET_ROOM_ID: "SET_ROOM_ID",
  SET_TIMESLOT: "SET_TIMESLOT",
  SET_LOADING: "SET_LOADING",
  SET_RESERVATIONS: "SET_RESERVATIONS",
  ADD_RESERVATION: "ADD_RESERVATION",
  REMOVE_RESERVATION: "REMOVE_RESERVATION"
};
const actions = {
  setApartmentId: id => ({
    type: types.SET_APARTMENT_ID,
    payload: id
  }),
  setRoomId: id => ({
    type: types.SET_ROOM_ID,
    payload: id
  }),
  setTimeslot: ({ timeslotId, date }) => ({
    type: types.SET_TIMESLOT,
    payload: { timeslotId, date }
  }),
  setReservations: reservations => ({
    type: types.SET_RESERVATIONS,
    payload: { reservations }
  }),
  setLoading: isLoading => ({
    type: types.SET_LOADING,
    payload: { isLoading }
  }),
  addReservation: reservation => ({
    type: types.ADD_RESERVATION,
    payload: reservation
  }),

  removeReservation: reservationId => ({
    type: types.REMOVE_RESERVATION,
    payload: reservationId
  }),

  createReservation: () => async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    const { date, timeslotId, roomId } = getState().booking;
    const { id } = getState().user;
    let response = await createReservation({
      date,
      timeslotId,
      roomId,
      userId: id
    });
    !response && alert("Something went south");

    dispatch(actions.setLoading(false));
    dispatch(actions.addReservation({ date, timeslotId, roomId }));
    dispatch(actions.setTimeslot({ timeslotId: null, date: null }));
  },

  loadReservations: userId => async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
console.log(userId)
    let now = new Date(),
      startDate = format(subDays(now, 1), "YYYY-MM-DD"),
      endDate = format(addDays(now, 5), "YYYY-MM-DD");
    let response = await getReservations({ startDate, endDate, userId });
    dispatch(actions.setReservations(response));
    dispatch(actions.setLoading(false));
  },

  deleteReservation: reservationId => async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    let response = await deleteReservation(reservationId);
    if (response) {
      dispatch(actions.removeReservation(reservationId));
    }

    dispatch(actions.setLoading(false));
  }
};
export { types, actions };
