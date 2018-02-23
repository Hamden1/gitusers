import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import users from './users';

export const reducers = combineReducers({
  routing: routerReducer,
  users: users,
  form: formReducer,
});
