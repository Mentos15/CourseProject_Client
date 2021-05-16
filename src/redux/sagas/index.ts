import { all, takeLatest } from "redux-saga/effects";
import { create } from "../../services/api";
import {
  DELETE_APPLICATION_REQUEST,
  FETCH_ACCEPT_APPLICATIONS_REQUEST, FETCH_ADD_CONFERENCES_REQUEST,
  FETCH_APPLICATIONS_REQUEST,
  FETCH_AUTHORIZATION_REQUEST, FETCH_CANCEL_APPLICATIONS_REQUEST, FETCH_CATEGORIES_REQUEST,
  FETCH_CONFERENCES_REQUEST,
  FETCH_CONFERENCES_REQUEST_BY_CATEGORIES_FILTER,
  FETCH_CONFERENCES_REQUEST_BY_ID,
  FETCH_CONFERENCES_REQUEST_BY_SEARCH_FILTER, FETCH_CONFIRMED_APPLICATIONS_REQUEST,
  FETCH_REGISTRATION_REQUEST, FETCH_SET_APPLICATIONS_REQUEST,
  LOGOUT_REQUEST, SET_NULL_APPLICATION_STATUS_REQUEST, SET_NULL_AUTHORIZATION_STATUS_REQUEST,
  SET_NULL_REGISTRATION_STATUS_REQUEST
} from "../../constants";
import {
  fetchConferences,
  fetchConferencesById,
  fetchConferencesByNameFilter,
  fetchConferencesByCategories,
  fetchRegistration,
  fetchAuthorization,
  fetchLogout,
  fetchNullRegistrationStatus,
  fetchNullAuthorizationStatus,
  fetchSetApplications,
  fetchNullApplicationStatus, fetchApplications,
  fetchCancelApplication, fetchAcceptApplication,
  fetchConfirmedApplications, fetchDeleteConfirmedApplication,
  fetchAddConference, fetchAllCategories
} from "./mockSaga";


export const rootSaga = function* root() {
  const api = create();
  yield all([
    takeLatest(FETCH_CONFERENCES_REQUEST, fetchConferences, api),
    takeLatest(FETCH_CONFERENCES_REQUEST_BY_ID, fetchConferencesById, api),
    takeLatest(FETCH_CONFERENCES_REQUEST_BY_SEARCH_FILTER, fetchConferencesByNameFilter, api),
    takeLatest(FETCH_CONFERENCES_REQUEST_BY_CATEGORIES_FILTER, fetchConferencesByCategories, api),
    takeLatest(FETCH_REGISTRATION_REQUEST, fetchRegistration, api),
    takeLatest(FETCH_AUTHORIZATION_REQUEST, fetchAuthorization, api),
    takeLatest(LOGOUT_REQUEST, fetchLogout, api),
    takeLatest(SET_NULL_REGISTRATION_STATUS_REQUEST, fetchNullRegistrationStatus, api),
    takeLatest(SET_NULL_AUTHORIZATION_STATUS_REQUEST, fetchNullAuthorizationStatus, api),
    takeLatest(FETCH_SET_APPLICATIONS_REQUEST, fetchSetApplications, api),
    takeLatest(SET_NULL_APPLICATION_STATUS_REQUEST, fetchNullApplicationStatus, api),
    takeLatest(FETCH_APPLICATIONS_REQUEST, fetchApplications, api),
    takeLatest(FETCH_CANCEL_APPLICATIONS_REQUEST, fetchCancelApplication, api ),
    takeLatest(FETCH_ACCEPT_APPLICATIONS_REQUEST, fetchAcceptApplication, api ),
    takeLatest(FETCH_CONFIRMED_APPLICATIONS_REQUEST, fetchConfirmedApplications, api ),
    takeLatest(DELETE_APPLICATION_REQUEST, fetchDeleteConfirmedApplication, api ),
    takeLatest(FETCH_ADD_CONFERENCES_REQUEST, fetchAddConference, api ),
    takeLatest(FETCH_CATEGORIES_REQUEST, fetchAllCategories, api ),

  ]);
};