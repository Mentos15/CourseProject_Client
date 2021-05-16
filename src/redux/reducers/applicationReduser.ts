import {AnyAction} from "redux";
import {
  DELETE_APPLICATION_FAILED,
  DELETE_APPLICATION_SUCCESS,
  FETCH_ACCEPT_APPLICATIONS_FAILED,
  FETCH_ACCEPT_APPLICATIONS_SUCCESS,
  FETCH_APPLICATIONS_FAILED,
  FETCH_APPLICATIONS_SUCCESS,
  FETCH_CANCEL_APPLICATIONS_FAILED,
  FETCH_CANCEL_APPLICATIONS_SUCCESS, FETCH_CONFIRMED_APPLICATIONS_FAILED,
  FETCH_CONFIRMED_APPLICATIONS_SUCCESS,
  FETCH_SET_APPLICATIONS_FAILED,
  FETCH_SET_APPLICATIONS_SUCCESS,
  SET_NULL_APPLICATION_STATUS_SUCCESS
} from "../../constants";

// type InitStateType = {
//   players:IStatePersons[];
// }
const INITIAL_STATE = {
  applications: [],
  message: '',
};

export const applicationReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_APPLICATIONS_SUCCESS:
      return {...state, applications: action.payload}
    case FETCH_APPLICATIONS_FAILED:
      return {...state, applications: action.payload}
    case FETCH_SET_APPLICATIONS_SUCCESS:
      return {...state, message: 'Вы успешно записались' };
    case FETCH_SET_APPLICATIONS_FAILED:
      return {...state, message: 'Вы уже записаны'};
    case SET_NULL_APPLICATION_STATUS_SUCCESS:
      return {...state, message: ' '};
    case FETCH_CANCEL_APPLICATIONS_SUCCESS:
      return {...state, applications: action.payload}
    case FETCH_CANCEL_APPLICATIONS_FAILED:
      return {...state, applications: action.payload}
    case FETCH_ACCEPT_APPLICATIONS_SUCCESS:
      return {...state, applications: action.payload}
    case FETCH_ACCEPT_APPLICATIONS_FAILED:
      return {...state, applications: action.payload}
    case FETCH_CONFIRMED_APPLICATIONS_SUCCESS:
      return {...state, applications: action.payload}
    case FETCH_CONFIRMED_APPLICATIONS_FAILED:
      return {...state, applications: action.payload}
    case DELETE_APPLICATION_SUCCESS:
      return {...state, applications: action.payload}
    case DELETE_APPLICATION_FAILED:
      return {...state, applications: action.payload}
    default:
      return state;
  }
};