
const INITIAL_STATE = {
  apartmentId: 0
};

/**
* @param {Object} state - Default application state
* @param {Object} action - Action from action creator
* @returns {Object} New state
*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_APARTMENT_ID':
      return {
        ...state,
        apartmentId: action.payload
      };
    default: return state;
  }
};