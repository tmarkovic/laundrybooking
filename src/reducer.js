import {types} from "./actions";

const INITIAL_STATE = {
  apartmentId: 0,
  roomId: 1,
  timeslotId: null,
  date: null,
  isLoading: false,
  reservations: []
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_APARTMENT_ID:
      return {
        ...state,
        apartmentId: action.payload
      };
    case types.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.payload
      };
    case types.SET_RESERVATIONS:
      return {
        ...state,
        ...action.payload
      };
    case types.SET_TIMESLOT:
      return {
        ...state,
        ...action.payload
      };
    case types.SET_LOADING:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
