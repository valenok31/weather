import React, {useEffect} from "react";
import LocationOutput from "./LocationOutput/LocationOutput";
import LocationSearch from "./LocationSearch/LocationSearch";
import s from "./Location.module.css";
import {connect} from "react-redux";
import {
    handleCurrentIp,
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    toggleIsLocationView
} from "../../redux/weather_reducer";


function LocationClass(props) {

    useEffect(() => {
        props.handleCurrentWeather(props.getSettings);
        props.handleForecastWeather(props.getSettings);
    }, [props.getSettings])


    if (!!props.getCurrentWeather.current) {
        let getWeather = props.getCurrentWeather;
        let currentLocation = getWeather.location;
        if (props.getSettings.location === 'auto:ip') {
            props.setSettings({location: currentLocation.name});
        }
        // TODO: clickNoLocation
        return <div className={s.header__top} id='clickNoLocation'>
            {props.getIsLocationView ?
                <LocationOutput currentLocation={currentLocation}
                                toggleIsLocationView={props.toggleIsLocationView}
                                handleCurrentIp={props.handleCurrentIp}
                                setSettings={props.setSettings}
                                getSettings={props.getSettings}/> :
                <LocationSearch setSettings={props.setSettings}
                                getSettings={props.getSettings}
                                currentLocation={currentLocation}
                                toggleIsLocationView={props.toggleIsLocationView}/>}
        </div>
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
    toggleIsLocationView,
})(LocationClass);

export default resultConnecting;