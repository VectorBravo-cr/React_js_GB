import {
    ADD_MESS,
    ADD_CHAT_MESS
} from "../storage/types/typesMessages";

export const getRooms = (mess) => {
    console.log( "room action get");
    return {
        type: ADD_MESS,
        payload: mess,
    }
};

