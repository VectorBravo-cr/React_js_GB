import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM, CHANGE_STORE } from "./types/typesList";

const initState = {
    usersRooms: [
        { text: "ChatRoom1", id: 1 },
        { text: "ChatRoom2", id: 2 },
        { text: "ChatRoom3", id: 3 },
    ],
    stateHomeWork: "Моя домашка номер 6",
};

const reducerMess = (state = initState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM:
            return {
                ...state,
                usersRooms: [
                    ...state.usersRooms,
                    { id: state.usersRooms.length, text: payload },
                ],
            };
        case DELETE_ITEM:
            return {
                ...state,
                usersRooms: state.usersRooms.filter((el) => el.id !== payload),
            };
        case CHANGE_ITEM:
            return { ...state, profileName: payload };
        case CHANGE_STORE:
            return { ...state, useLocalStore: payload };
        case "CLEAR_TODOLIST":
            return { ...state, usersRooms: [] };
        default:
            return state;
    }
};

export default reducerMess;
