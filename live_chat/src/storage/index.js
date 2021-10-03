// import {combineReducers, createStore} from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import stors from "./store";
import messages from "./messages";
import rooms from "./rooms";

const reducers = combineReducers({
    messages,
    rooms,
    // stors
})

const store = createStore(reducers, composeWithDevTools());

export default store;

