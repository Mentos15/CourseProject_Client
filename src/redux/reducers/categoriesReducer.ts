import {AnyAction} from "redux";
import {
  FETCH_CATEGORIES_FAILED,
  FETCH_CATEGORIES_SUCCESS,
} from "../../constants";

const INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {...state, categories: action.payload}
    case FETCH_CATEGORIES_FAILED:
      return {...state, categories: []}

    default:
      return state;
  }
};
