import { configureStore, combineReducers } from "redux";
import { reducers as reducerSignUp } from "../reducers/reducer";

const reducers = combineReducers({ reducerSignUp });

export const store = configureStore(reducers);
