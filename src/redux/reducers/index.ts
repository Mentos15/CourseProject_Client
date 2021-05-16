import { combineReducers } from "redux";
import { applicationReducer } from "./applicationReduser";
import {allInfoConferenceReducer, conferenceReducer} from "./conferenceReduser";
import {userReducer} from "./userReducer";
import {categoriesReducer} from "./categoriesReducer";

export const rootReducer:any = combineReducers({
  applications: applicationReducer,
  conferences: conferenceReducer,
  allInfo: allInfoConferenceReducer,
  user: userReducer,
  categories: categoriesReducer,
});