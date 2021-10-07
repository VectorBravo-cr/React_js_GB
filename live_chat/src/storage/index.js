import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

import stors from "./store";
import messages from "./messages";
import rooms from "./rooms";

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    rooms: rooms,
    messages: messages,
    // stors
})

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export {store, persistor}
