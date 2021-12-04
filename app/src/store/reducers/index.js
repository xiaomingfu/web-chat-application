import authReducer from "./auth";
import chatReducer from "./chat";
import { combineReducers } from "redux";

export default combineReducers({ authReducer, chatReducer });
