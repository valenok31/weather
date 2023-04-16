import {fetchIp, fetchWeather} from "../api/api_weather";
import LocationSearch from "../components/Location/LocationSearch/LocationSearch";

const SET_CURRENT_WEATHER = 'SET_CURRENT_WEATHER';
const SET_FORECAST_WEATHER = 'SET_FORECAST_WEATHER';
const SET_HISTORY_WEATHER = 'SET_HISTORY_WEATHER';
const SET_SETTINGS = 'SET_SETTINGS';
const SET_SETTINGS_WINDVISUALIZATION = 'SET_SETTINGS_WINDVISUALIZATION';
const SET_SETTINGS_SCALETEMPERATURE = 'SET_SETTINGS_SCALETEMPERATURE';
const SET_SETTINGS_THEME = 'SET_SETTINGS_THEME';
const SET_SETTINGS_LANGUAGE = 'SET_SETTINGS_LANGUAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const TOGGLE_IS_NOT_FOUND = 'TOGGLE_IS_NOT_FOUND';
const TOGGLE_IS_LOCATION_VIEW = 'TOGGLE_IS_LOCATION_VIEW';

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
    historyWeather: {},
    getHistoryWeather() {
        return this.historyWeather;
    },
    providingWeather: "forecast",
    isLocationView: true,
    settings: {
        location: 'auto:ip',
        language: 'ru',
        theme: true, //dark
        windVisualization: true,
        scaleTemperature: true,
    },
    isLoading: false,
    isNotFound: false,
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

        case SET_HISTORY_WEATHER:
            return {
                ...state,
                historyWeather: action.historyWeather
            }

        case SET_SETTINGS:
            return {
                ...state,
                settings: {...state.settings,
                    location: action.settings.location,
                }
            }

        case SET_SETTINGS_WINDVISUALIZATION:
            return {
                ...state,
                settings: {...state.settings,
                    windVisualization: action.settings.windVisualization,
                }
            }

        case SET_SETTINGS_SCALETEMPERATURE:
            return {
                ...state,
                settings: {...state.settings,
                    scaleTemperature: action.settings.scaleTemperature,
                }
            }

        case SET_SETTINGS_THEME:
            return {
                ...state,
                settings: {...state.settings,
                    theme: action.settings.theme,
                }
            }

        case SET_SETTINGS_LANGUAGE:
            return {
                ...state,
                settings: {...state.settings,
                    language: action.settings.language,
                }
            }

        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }

        case TOGGLE_IS_NOT_FOUND:
            return {
                ...state,
                isNotFound: action.isNotFound,
            }

        case TOGGLE_IS_LOCATION_VIEW:
            return {
                ...state,
                isLocationView: action.isLocationView,
            }

        default:
            return state;
    }
};


export const setCurrentWeather = (currentWeather) => ({type: SET_CURRENT_WEATHER, currentWeather});
export const setForecastWeather = (forecastWeather) => ({type: SET_FORECAST_WEATHER, forecastWeather});
export const setHistoryWeather = (historyWeather) => ({type: SET_HISTORY_WEATHER, historyWeather});
export const setSettings = (settings) => ({type: SET_SETTINGS, settings});
export const setSettingsWV = (settings) => ({type: SET_SETTINGS_WINDVISUALIZATION, settings});
export const setSettingsScaleTemperature = (settings) => ({type: SET_SETTINGS_SCALETEMPERATURE, settings});
export const setSettingsTheme = (settings) => ({type: SET_SETTINGS_THEME, settings});
export const setSettingsLanguage = (settings) => ({type: SET_SETTINGS_LANGUAGE, settings});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const toggleIsNotFound = (isNotFound) => ({type: TOGGLE_IS_NOT_FOUND, isNotFound});
export const toggleIsLocationView = (isLocationView) => ({type: TOGGLE_IS_LOCATION_VIEW, isLocationView});

export const handleCurrentWeather = (settings) => {
    return (dispatch) => {
        dispatch(setCurrentWeather({}));
        fetchWeather.fromCurrent(settings).then(data => {
            dispatch(setCurrentWeather(data));
            dispatch(toggleIsNotFound(false));
        }).catch(err => {
                console.log(err)
                dispatch(toggleIsNotFound(true));
            }
        );
    }
}

export const handleForecastWeather = (settings) => {
    return (dispatch) => {
        dispatch(setForecastWeather({}));

        fetchWeather.fromForecast(settings).then(data => {
            dispatch(setForecastWeather(data));
            dispatch(toggleIsNotFound(false));
        }).catch(err => {
                console.log(err)
                dispatch(toggleIsNotFound(true));
            }
        );
    }
}

export const handleHistoryWeather = (settings) => {
    return (dispatch) => {
        dispatch(setHistoryWeather({}));
        fetchWeather.fromHistory(settings).then(data => {
            dispatch(setHistoryWeather(data));
            dispatch(toggleIsNotFound(false));
        }).catch(err => {
                console.log(err)
                dispatch(toggleIsNotFound(true));
            }
        );
    }
}


export const handleCurrentIp = () => {
    return (dispatch) => {
        fetchIp.fromCurrent().then(data => {
            //console.log(data)
            // TODO: validation data.city
            dispatch(setSettings({location: data.city}));
        });
    }
}

export default weather_reducer;