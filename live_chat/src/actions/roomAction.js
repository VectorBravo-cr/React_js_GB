import {
    ADD_ROOM,
    GET_ROOMS,
    DELETE_ROOM,
    CLEAR_ROOMS
} from "../storage/types/typesRooms";

export const getRooms = (rooms) => {
    console.log( "room action get");
    return {
    type: GET_ROOMS,
    payload: rooms,
}};

export const deleteRoom = (roomId) => {
    console.log(roomId, "room action del");
    return {
    type: DELETE_ROOM,
    payload: roomId,
}};

export const addRoom = (room) => {
    console.log(room, "room action add");
    return {
        type: ADD_ROOM,
        payload: room ,
    };
};

