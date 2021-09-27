import {ADD_ITEM, CHANGE_STORE, CHANGE_ITEM, DELETE_ITEM} from "../storage/types/typesList";

export const deleteItemStore = (id) => ({
    type: DELETE_ITEM,
    payload: id,
});

export const addItemToStore = (text) => ({
    type: ADD_ITEM,
    payload: text,
});
export const changeItemStore = (text) => ({
    type: CHANGE_ITEM,
    payload: text,
});

export const changeStore = (boolean) => ({
    type: CHANGE_STORE,
    payload: boolean,
});
