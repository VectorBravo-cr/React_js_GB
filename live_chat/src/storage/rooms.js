import { ADD_ROOM, DELETE_ROOM, GET_ROOMS, CLEAR_ROOMS, } from "./types/typesRooms";

const initState = {
    usersRooms: [
        { name: "ChatRoom1", id: 0 },
        { name: "ChatRoom2", id: 1 },
        { name: "ChatRoom3", id: 2 },
    ],
    stateHomeWork: "Моя домашка номер 6",
};

const reducer = (state = initState, { payload, type }) => {
    switch (type) {
        case ADD_ROOM:
            return {
                ...state,
                usersRooms: [
                    ...state.usersRooms,
                    { id: state.usersRooms.length, name: payload },
                ],
            };
        case GET_ROOMS:
            return [...payload];
        case DELETE_ROOM:
            return {
                ...state,
                usersRooms: state.usersRooms.filter((el) => el.id !== payload),
            };
        case CLEAR_ROOMS:
            return { ...state, usersRooms: [] };
        default:
            return state;
    }
};

export default reducer;
