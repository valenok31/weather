import {fetchWeather} from "../api/api_weather";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_SETTINGS = 'SET_SETTINGS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    currentWeather: {},
    getCurrentWeather() {
        return this.currentWeather;
    },
    settings: {
        location: 'Novoaltaysk',
        //location: 'Tokyo',
    },
    isLoading: false,
};

const weather_reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.currentWeather
            }

        case SET_SETTINGS:
            return {
                ...state,
                settings: action.settings,
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state;
    }
};


export const setCurrentWeather = (currentWeather) => ({type: SET_CURRENT_WEATHER, currentWeather});
export const setSettings = (settings) => ({type: SET_SETTINGS, settings});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const handleCurrentWeather = (settings) => {
    return (dispatch) => {
        dispatch(setCurrentWeather({}));
        fetchWeather.fromCurrent(settings).then(data => {
            dispatch(setCurrentWeather(data));
        });
    }
}

export default weather_reducer;