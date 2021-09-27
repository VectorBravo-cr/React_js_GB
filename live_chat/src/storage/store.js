import { ADD_ITEM, DELETE_ITEM, CHANGE_ITEM, CHANGE_STORE } from "./types/typesList";

const initState = {
    usersRooms: [
        { text: "ChatRoom1", id: 1 },
        { text: "ChatRoom2", id: 2 },
        { text: "ChatRoom3", id: 3 },
    ],
    profileName: "Моя домашка номер 5",
    useLocalStore: true,
};

const reducer = (state = initState, { payload, type }) => {
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

export default reducer;

// store - a.k.a state - глобальный объект с данными для всего приложения
// reducer - чистая фун-ия которая может менять наш store(a.k.a global state)
// action - простой объект который имеет два поля (type, payload);
