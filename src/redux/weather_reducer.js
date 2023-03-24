import {fetchIp, fetchWeather} from "../api/api_weather";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';
const SET_SETTINGS = 'SET_SETTINGS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
    // TODO: language selection
    currentWeather: {},
    getCurrentWeather() {
        return this.currentWeather;
    },
    forecastWeather: {},
    getForecastWeather() {
        return this.forecastWeather;
    },
    providingWeather: "forecast",
    settings: {
        location: 'auto:ip',
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
        case SET_FORECAST_WEATHER:
            return {
                ...state,
                forecastWeather: action.forecastWeather
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
export const setForecastWeather = (forecastWeather) => ({type: SET_FORECAST_WEATHER, forecastWeather});
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

export const handleForecastWeather = (settings) => {
    return (dispatch) => {
        dispatch(setForecastWeather({}));
        fetchWeather.fromForecast(settings).then(data => {
            dispatch(setForecastWeather(data));
        });
    }
}




export const handleCurrentIp = () => {
    return (dispatch) => {
        fetchIp.fromCurrent().then(data => {
            //console.log(data)
            // TODO: validation data.city
            dispatch(setSettings({location:data.city}));
        });
    }
}

export default weather_reducer;