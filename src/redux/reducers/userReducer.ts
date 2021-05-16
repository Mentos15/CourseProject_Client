import {AnyAction} from "redux";
import {
  FETCH_AUTHORIZATION_FAILED,
  FETCH_AUTHORIZATION_SUCCESS,
  FETCH_REGISTRATION_FAILED,
  FETCH_REGISTRATION_SUCCESS,
  LOGOUT_SUCCESS,
  SET_NULL_AUTHORIZATION_STATUS_SUCCESS,
  SET_NULL_REGISTRATION_STATUS_SUCCESS
} from "../../constants";

// type InitStateType = {
//   players:IStatePersons[];
// }
const INITIAL_STATE = {
  user: {},
  status: '',
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_REGISTRATION_SUCCESS:
      return {...state, status: 'Регистрация прошла успешно' };
    case FETCH_AUTHORIZATION_SUCCESS:
      return {...state, user: action.payload };
    case FETCH_AUTHORIZATION_FAILED:
      return {...state, user: {message: action.payload.data.message}};
    case FETCH_REGISTRATION_FAILED:
      return {...state, status: 'Данный email занят'}
    case SET_NULL_REGISTRATION_STATUS_SUCCESS:
      return {...state, status: ''}
    case SET_NULL_AUTHORIZATION_STATUS_SUCCESS:
      return {...state, user: {message: ' '}}
    case LOGOUT_SUCCESS:
      return {...state, user: {message: 'Не авторизован'}}
    default:
      return state;
  }
};
