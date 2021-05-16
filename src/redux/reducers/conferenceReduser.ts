import {AnyAction} from "redux";
import {
  FETCH_CONFERENCES_SUCCESS, FETCH_CONFERENCES_SUCCESS_BY_CATEGORIES_FILTER,
  FETCH_CONFERENCES_SUCCESS_BY_ID,
  FETCH_CONFERENCES_SUCCESS_BY_SEARCH_FILTER
} from "../../constants";

// type InitStateType = {
//   players:IStatePersons[];
// }
const INITIAL_STATE = {
  conferences: [],
};

const INITIAL_STATE_2 = {
  allInfo: {},
};

export const conferenceReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_CONFERENCES_SUCCESS:
      return {...state, conferences: action.payload };
    case FETCH_CONFERENCES_SUCCESS_BY_SEARCH_FILTER:
      return {...state, conferences: action.payload };
    case FETCH_CONFERENCES_SUCCESS_BY_CATEGORIES_FILTER:
      return {...state, conferences: action.payload };
    default:
      return state;
  }
};

export const allInfoConferenceReducer = (state = INITIAL_STATE_2, action: AnyAction) => {
  switch (action.type) {
    case FETCH_CONFERENCES_SUCCESS_BY_ID:
      return {...state, allInfo: action.payload };
    default:
      return state;
  }
};