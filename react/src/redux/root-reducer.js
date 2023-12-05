import { combineReducers } from "redux";

import counterReducer from "./slice";

const rootReducer = combineReducers({ counterReducer });

export default rootReducer;