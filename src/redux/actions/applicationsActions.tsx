import {
  DELETE_APPLICATION_REQUEST,
  FETCH_ACCEPT_APPLICATIONS_REQUEST,
  FETCH_APPLICATIONS_REQUEST, FETCH_CANCEL_APPLICATIONS_REQUEST, FETCH_CONFIRMED_APPLICATIONS_REQUEST,
  FETCH_SET_APPLICATIONS_REQUEST,
  SET_NULL_APPLICATION_STATUS_REQUEST,
} from "../../constants";

export const fetchSetApplication = (application: any) => ({
  type:FETCH_SET_APPLICATIONS_REQUEST,
  application,
});

export const setNullApplicationStatus = () => ({
  type:SET_NULL_APPLICATION_STATUS_REQUEST
});

export const fetchAllApplications = () => ({
  type: FETCH_APPLICATIONS_REQUEST
});

export const fetchConfirmedApplications = () => ({
  type: FETCH_CONFIRMED_APPLICATIONS_REQUEST
});

export const fetchCancelApplication = (id: number) => ({
  type: FETCH_CANCEL_APPLICATIONS_REQUEST,
  id,
});

export const fetchAcceptApplication = (id: number) => ({
  type: FETCH_ACCEPT_APPLICATIONS_REQUEST,
  id,
});

export const fetchDeleteConfirmedApplication = (id: number) => ({
  type: DELETE_APPLICATION_REQUEST,
  id,
});