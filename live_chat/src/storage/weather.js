import {
    // SET_CITY,
    GET_WEATHER,
    ADD_WEATHER
} from "./types/typesApi";

const initialState = [];

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {

        case ADD_WEATHER:
            return [payload, ...state];

        // case GET_POKEMONS:
        //     return [...payload];

        default:
            return state;
    }
};

export default reducer;
