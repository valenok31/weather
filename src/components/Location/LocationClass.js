import React from "react";
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


class LocationClass extends React.Component {

    componentDidMount() {
        this.props.handleCurrentWeather(this.props.getSettings);
        this.props.handleForecastWeather(this.props.getSettings);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getSettings !== prevProps.getSettings) {
            this.props.handleCurrentWeather(this.props.getSettings);
            this.props.handleForecastWeather(this.props.getSettings);

        }
    }

    render() {
        if (!!this.props.getCurrentWeather.current) {
            let getWeather = this.props.getCurrentWeather
            let currentLocation = getWeather.location
            if(this.props.getSettings.location==='auto:ip'){
                this.props.setSettings({location: currentLocation.name});
            }
// TODO: clickNoLocation

            return <div className={s.header__top} id='clickNoLocation'>
                {this.props.getIsLocationView ?
                    <LocationOutput currentLocation={currentLocation}
                                    toggleIsLocationView={this.props.toggleIsLocationView}
                                    setSettings={this.props.setSettings}
                                    getSettings={this.props.getSettings}/> :
                    <LocationSearch setSettings={this.props.setSettings}
                                    getSettings={this.props.getSettings}
                                    currentLocation={currentLocation}
                                    toggleIsLocationView={this.props.toggleIsLocationView}/>}
            </div>
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
})(LocationClass);

export default resultConnecting;