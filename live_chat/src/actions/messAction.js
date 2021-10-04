import {
    ADD_MESS,
    ADD_CHAT_MESS
} from "../storage/types/typesMessages";

export const pushMess = (mess) => {
    console.log( "mess action push:", mess);
    //// Егор, обьясни пожалуйста, как в сложный объект в сторе передать изменения?
    //// мне либо выгружать весь объект и менять его в компоненте, что будет нарушать правило "тупого" компонента
    //// или лучше упростить объект чатов и менять его нативненько? просто пока сложный - не особо удобно)
    return {
        type: ADD_MESS,
        payload: mess,
    }
};

