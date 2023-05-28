import {fetchIp, fetchWeather} from "../api/api_auch";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';


const initialState = {
    // TODO: language selection
    currentWeather: {},
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather
            }

        default:
            return state;
    }
};


export const setCurrentWeather = (currentWeather) => ({type: SET_CURRENT_WEATHER, currentWeather});


export default weather_reducer;