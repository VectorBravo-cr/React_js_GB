import {ADD_MESS, ADD_CHAT_MESS} from "./types/typesMessages";
import RoomId from "../components/room/roomId";

const initState = {
    messagesStore: [
        {
            idRoom: 1, messages: [
                {
                    id: 1,
                    author: 'tester',
                    text: 'im push test text',
                    time: '1:30:45'
                },
                {
                    id: 2,
                    author: 'tester',
                    text: 'im push test text2',
                    time: '1:30:46'
                }
            ],
        },
        {
            idRoom: 2, messages: [
                {
                    id: 1,
                    author: 'tester',
                    text: 'im push test text',
                    time: '2:30:45'
                },
                {
                    id: 2,
                    author: 'tester',
                    text: 'im push test text2',
                    time: '2:30:46'
                }
            ],
        },
        {
            idRoom: 3, messages: [
                {
                    id: 1,
                    author: 'tester',
                    text: 'im push test text',
                    time: '3:30:45'
                },
                {
                    id: 2,
                    author: 'tester',
                    text: 'im push test text2',
                    time: '3:30:46'
                }
            ],
        }
    ]
}

const reducer = (state = initState, {payload, type}) => {
    switch (type) {
        case ADD_MESS:
            return {
                ...state,
                messagesStore: [
                    ...state.messagesStore,
                    {idRoom: state.messagesStore.length, messages: payload},
                ],
            };
        case ADD_CHAT_MESS:
            return {...state.messagesStore};
        default:
            return state;
    }
};

export default reducer;
