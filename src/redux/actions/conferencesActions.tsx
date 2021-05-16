import {
  FETCH_ADD_CONFERENCES_REQUEST,
  FETCH_AUTHORIZATION_REQUEST,
  FETCH_CONFERENCES_REQUEST,
  FETCH_CONFERENCES_REQUEST_BY_CATEGORIES_FILTER,
  FETCH_CONFERENCES_REQUEST_BY_ID,
  FETCH_CONFERENCES_REQUEST_BY_SEARCH_FILTER,
  FETCH_REGISTRATION_REQUEST,
  LOGOUT_REQUEST, SET_NULL_AUTHORIZATION_STATUS_REQUEST,
  SET_NULL_REGISTRATION_STATUS_REQUEST
} from "../../constants";


export const fetchConferences = () => ({
  type:FETCH_CONFERENCES_REQUEST
});

export const logoutAction = () => ({
  type:LOGOUT_REQUEST
});

export const setNullRegistrationStatus = () => ({
  type:SET_NULL_REGISTRATION_STATUS_REQUEST
});

export const setNullAuthorizationStatus = () => ({
  type:SET_NULL_AUTHORIZATION_STATUS_REQUEST
});

export const fetchConferencesById = (conferenceId: number) => ({
  type:FETCH_CONFERENCES_REQUEST_BY_ID,
  conferenceId,
});

export const fetchAuthorization = (user: any) => ({
  type:FETCH_AUTHORIZATION_REQUEST,
  user,
});

export const fetchAddConference = (conference: any) => ({
  type:FETCH_ADD_CONFERENCES_REQUEST,
  conference,
});

export const fetchRegistration= (user: any) => ({
  type:FETCH_REGISTRATION_REQUEST,
  user,
});

export const fetchConferencesBySearchFilter = (name: string) => ({
  type:FETCH_CONFERENCES_REQUEST_BY_SEARCH_FILTER,
  name,
});

export const fetchConferencesByCategoriesFilter = (categories: Array<string>) => ({
  type:FETCH_CONFERENCES_REQUEST_BY_CATEGORIES_FILTER,
  categories,
});