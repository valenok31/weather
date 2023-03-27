import React from "react";
import s from './Weather.module.css'
import {
    handleCurrentIp,
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    toggleIsLocationView
} from "../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "./Preloader/Preloader";
import LocationSearch from "./LocationSearch/LocationSearch";
import {HeaderContent} from "./HeaderContent";
import LocationOutput from "./LocationOutput/LocationOutput";

class Weather extends React.Component {

    componentDidMount() {
        this.props.handleCurrentIp();
        //this.props.handleCurrentWeather(this.props.getSettings);
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
            let temp = getWeather.current.temp_c;
            let currentLocation = getWeather.location
            let currentWeather = getWeather.current
            let nextDay = getWeather.forecast.forecastday
            let windDegree = currentWeather.wind_degree;
            let windKph = currentWeather.wind_kph;
            //console.log(window)

            return (<>
                    <div className={s.header__top}>
                        {this.props.getIsLocationView ?
                            <LocationOutput currentLocation={currentLocation}
                                            toggleIsLocationView={this.props.toggleIsLocationView}/> :
                            <LocationSearch setSettings={this.props.setSettings}
                                            getSettings={this.props.getSettings}
                                            currentLocation={currentLocation}
                                            toggleIsLocationView={this.props.toggleIsLocationView}/>}
                    </div>
                    <HeaderContent currentWeather={currentWeather} nextDay={nextDay} windDegree={windDegree}
                                   windKph={windKph}/>
                </>
            )
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
        getIsLocationView: state.weather_reducer.isLocationView,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    handleCurrentIp,
    toggleIsLocationView
})(Weather);

export default resultConnecting;

