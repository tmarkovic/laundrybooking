import {createReservation, getReservations} from "./api/reservations";

const types = {
  SET_APARTMENT_ID: "SET_APARTMENT_ID",
  SET_ROOM_ID: "SET_ROOM_ID",
  SET_TIMESLOT: "SET_TIMESLOT",
  SET_LOADING: "SET_LOADING",
  SET_RESERVATIONS: "SET_RESERVATIONS"
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
  setTimeslot: ({timeslotId, date}) => ({
    type: types.SET_TIMESLOT,
    payload: {timeslotId, date}
  }),
  setReservations: reservations => ({
    type: types.SET_RESERVATIONS,
    payload: {reservations}
  }),
  setLoading: isLoading => ({
    type: types.SET_LOADING,
    payload: {isLoading}
  }),

  createReservation: () => async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    const {date, apartmentId, timeslotId, roomId} = getState();
    let response = await createReservation({
      date,
      apartmentId,
      timeslotId,
      roomId
    });
    !response && alert("Something went south");

    dispatch(actions.setLoading(false));
  },

  loadReservations: (startDate, endDate) => async (dispatch, getState) => {
    dispatch(actions.setLoading(true));
    let response = await getReservations({startDate, endDate});
    dispatch(actions.setReservations(response));
    dispatch(actions.setLoading(false));
  }
};
export {types, actions};
