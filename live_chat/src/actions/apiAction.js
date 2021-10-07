import {
    SET_CITY,
    GET_WEATHER,
    ADD_WEATHER,

} from "../store/types/";

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city,
});

export const getWetherNow = (cityWeather) => ({
    type: GET_WEATHER,
    payload: cityWeather,
});

export const addWeatherList = (cityWeather) => {
    return {
        type: ADD_WEATHER,
        payload: { ...cityWeather },
    };
};

export const getCityWather = (city) => (dispatch) => {
    fetch(`https://goweather.herokuapp.com/weather/${city}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 0; i < data.results.length; i++) {
                fetch(data.results[i].url)
                    .then((response) => response.json())
                    .then((data) => dispatch(addWeatherList(data)));
            }
        });
};


// dispatch(getPokemons(arr)) =>
