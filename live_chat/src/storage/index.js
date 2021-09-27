import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store";

export const store = createStore(reducer, composeWithDevTools());
