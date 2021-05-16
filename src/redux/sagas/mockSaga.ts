import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_APPLICATIONS_FAILED,
  FETCH_APPLICATIONS_SUCCESS,
  FETCH_CONFERENCES_FAILED,
  FETCH_CONFERENCES_FAILED_BY_ID,
  FETCH_CONFERENCES_SUCCESS,
  FETCH_CONFERENCES_SUCCESS_BY_ID,
  FETCH_CONFERENCES_SUCCESS_BY_SEARCH_FILTER,
  FETCH_CONFERENCES_FAILED_BY_SEARCH_FILTER,
  FETCH_CONFERENCES_SUCCESS_BY_CATEGORIES_FILTER,
  FETCH_CONFERENCES_FAILED_BY_CATEGORIES_FILTER,
  FETCH_REGISTRATION_SUCCESS,
  FETCH_REGISTRATION_FAILED,
  FETCH_AUTHORIZATION_SUCCESS,
  FETCH_AUTHORIZATION_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  SET_NULL_REGISTRATION_STATUS_SUCCESS,
  SET_NULL_REGISTRATION_STATUS_FAILED,
  SET_NULL_AUTHORIZATION_STATUS_SUCCESS,
  SET_NULL_AUTHORIZATION_STATUS_FAILED,
  FETCH_SET_APPLICATIONS_SUCCESS,
  FETCH_SET_APPLICATIONS_FAILED,
  SET_NULL_APPLICATION_STATUS_SUCCESS,
  SET_NULL_APPLICATION_STATUS_FAILED,
  FETCH_CANCEL_APPLICATIONS_SUCCESS,
  FETCH_CANCEL_APPLICATIONS_FAILED,
  FETCH_ACCEPT_APPLICATIONS_SUCCESS,
  FETCH_ACCEPT_APPLICATIONS_FAILED,
  FETCH_CONFIRMED_APPLICATIONS_SUCCESS,
  FETCH_CONFIRMED_APPLICATIONS_FAILED,
  DELETE_APPLICATION_SUCCESS,
  DELETE_APPLICATION_FAILED,
  FETCH_ADD_CONFERENCES_SUCCESS,
  FETCH_ADD_CONFERENCES_FAILED,
  FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAILED
} from "../../constants";


export function* fetchConferencesByNameFilter(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.getConferencesBySearchFilter, action.name);

    if (response.ok) {
      yield put({
        type: FETCH_CONFERENCES_SUCCESS_BY_SEARCH_FILTER,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_CONFERENCES_FAILED_BY_SEARCH_FILTER, payload: response });
    }
  } catch (error) {

    yield put({ type: FETCH_CONFERENCES_FAILED_BY_SEARCH_FILTER, payload: error });
  }
}

export function* fetchLogout (api:any, action: any) {
  try {
    yield put({
      type: LOGOUT_SUCCESS,
      payload: 'test',
    });
  } catch (error) {
    yield put({
      type: LOGOUT_FAILED,
    });
  }
}

export function* fetchNullAuthorizationStatus (api:any, action: any) {
  try {
    yield put({
      type: SET_NULL_AUTHORIZATION_STATUS_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SET_NULL_AUTHORIZATION_STATUS_FAILED,
    });
  }
}

export function* fetchNullRegistrationStatus (api:any, action: any) {
  try {
    yield put({
      type: SET_NULL_REGISTRATION_STATUS_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SET_NULL_REGISTRATION_STATUS_FAILED,
    });
  }
}

export function* fetchNullApplicationStatus (api:any, action: any) {
  try {
    yield put({
      type: SET_NULL_APPLICATION_STATUS_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SET_NULL_APPLICATION_STATUS_FAILED,
    });
  }
}

export function* fetchAuthorization(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.authorization, action.user);

    if (response.ok) {
      yield put({
        type: FETCH_AUTHORIZATION_SUCCESS,
        payload: response.data,
      });
    }
    if (!response.ok) {
      yield put({ type: FETCH_AUTHORIZATION_FAILED, payload: response });
    }
  } catch (error) {

    yield put({ type: FETCH_AUTHORIZATION_FAILED, payload: error });
  }
}

export function* fetchRegistration(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.registration, action.user);

    if (response.ok) {
      yield put({
        type: FETCH_REGISTRATION_SUCCESS,
        payload: response.data,
      });
    }
    if (!response.ok) {
      yield put({ type: FETCH_REGISTRATION_FAILED, payload: response });
    }
  } catch (error) {

    yield put({ type: FETCH_REGISTRATION_FAILED, payload: error });
  }
}

export function* fetchConferencesByCategories(api:any, action: any) {
  try {

    // @ts-ignore
    const response = yield call(api.getConferencesByCategories, action.categories);

    if (response.ok) {
      yield put({
        type: FETCH_CONFERENCES_SUCCESS_BY_CATEGORIES_FILTER,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_CONFERENCES_FAILED_BY_CATEGORIES_FILTER, payload: response });
    }
  } catch (error) {

    yield put({ type: FETCH_CONFERENCES_FAILED_BY_CATEGORIES_FILTER, payload: error });
  }
}

export function* fetchConferences(api:any) {
  try {
    // @ts-ignore
    const response = yield call(api.getAllConferences);
    if (response.ok) {
      yield put({
        type: FETCH_CONFERENCES_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_CONFERENCES_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_CONFERENCES_FAILED, payload: error });
  }
}

export function* fetchConferencesById(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.fetchConference,action.conferenceId);
    if (response.ok) {
      yield put({
        type: FETCH_CONFERENCES_SUCCESS_BY_ID,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_CONFERENCES_FAILED_BY_ID, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_CONFERENCES_FAILED_BY_ID, payload: error });
  }
}

export function* fetchSetApplications(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.fetchSubmitApplication, action.application);
    if (response.ok) {
      yield put({
        type: FETCH_SET_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_SET_APPLICATIONS_FAILED, payload: response });
    }
  } catch (error) {
    yield put({ type: FETCH_SET_APPLICATIONS_FAILED, payload: error });
  }
}

export function* fetchApplications(api:any) {

  try {
    // @ts-ignore
    const response = yield call(api.getApplications);
    if (response.ok) {
      yield put({
        type: FETCH_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {

      yield put({ type: FETCH_APPLICATIONS_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_APPLICATIONS_FAILED, payload: error });
  }
}

export function* fetchCancelApplication(api:any, action: any) {

  try {
    // @ts-ignore
    const response = yield call(api.cancelApplication, action.id );
    if (response.ok) {
      yield put({
        type: FETCH_CANCEL_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_CANCEL_APPLICATIONS_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_CANCEL_APPLICATIONS_FAILED, payload: error });
  }
}

export function* fetchDeleteConfirmedApplication(api:any, action: any) {

  try {
    // @ts-ignore
    const response = yield call(api.deleteConfirmedApplication, action.id );
    if (response.ok) {
      yield put({
        type: DELETE_APPLICATION_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: DELETE_APPLICATION_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: DELETE_APPLICATION_FAILED, payload: error });
  }
}

export function* fetchAddConference(api:any, action: any) {
  try {
    // @ts-ignore
    const response = yield call(api.addConference, action.conference );
    if (response.ok) {
      yield put({
        type: FETCH_ADD_CONFERENCES_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_ADD_CONFERENCES_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_ADD_CONFERENCES_FAILED, payload: error });
  }
}

export function* fetchAcceptApplication(api:any, action: any) {

  try {
    // @ts-ignore
    const response = yield call(api.acceptApplication, action.id );
    if (response.ok) {
      yield put({
        type: FETCH_ACCEPT_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {
      yield put({ type: FETCH_ACCEPT_APPLICATIONS_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_ACCEPT_APPLICATIONS_FAILED, payload: error });
  }
}

export function* fetchConfirmedApplications(api:any) {

  try {
    // @ts-ignore
    const response = yield call(api.getConfirmedApplications);
    if (response.ok) {
      yield put({
        type: FETCH_CONFIRMED_APPLICATIONS_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {

      yield put({ type: FETCH_CONFIRMED_APPLICATIONS_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_CONFIRMED_APPLICATIONS_FAILED, payload: error });
  }
}

export function* fetchAllCategories(api:any) {

  try {
    // @ts-ignore
    const response = yield call(api.getAllCategories);
    if (response.ok) {
      yield put({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: response.data,
      });
    }

    if (!response.ok) {

      yield put({ type: FETCH_CATEGORIES_FAILED, payload: response.data });
    }
  } catch (error) {
    yield put({ type: FETCH_CATEGORIES_FAILED, payload: error });
  }
}