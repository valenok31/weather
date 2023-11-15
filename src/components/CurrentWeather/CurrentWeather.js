import React, {useEffect} from "react";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {
    handleCurrentIp,
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    toggleIsLocationView
} from "../../redux/weather_reducer";
import {HeaderContent} from "./CurrentHeaderContent";
import NothingFound from "../NothingFound/NothingFound";

function CurrentWeather(props) {

    useEffect(()=>{
        props.handleCurrentWeather(props.getSettings);
        props.handleForecastWeather(props.getSettings);
    },[props.getSettings]);



    if (!!props.getCurrentWeather.current) {
        let getWeather = props.getCurrentWeather
        //let currentLocation = getWeather.location
        let currentWeather = getWeather.current
        let nextDay = getWeather.forecast.forecastday
        let windDegree = currentWeather.wind_degree;
        let windKph = currentWeather.wind_kph;

        return (<>
                <div onClick={() => {
                    props.toggleIsLocationView(true)
                }}>
                    <HeaderContent currentWeather={currentWeather}
                                   nextDay={nextDay}
                                   windDegree={windDegree}
                                   windKph={windKph}
                                   getSettings={props.getSettings}/>
                </div>
            </>
        )
    } else {
        if (props.getIsNotFound) {
            return <NothingFound/>
        } else {
            return <Preloader/>
        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getCurrentWeather: state.weather_reducer.currentWeather,
        getForecastWeather: state.weather_reducer.forecastWeather,
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
        getIsNotFound: state.weather_reducer.isNotFound,
        getIsLocationView: state.weather_reducer.isLocationView,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    handleCurrentIp,
    toggleIsLocationView
})(CurrentWeather);

export default resultConnecting;

