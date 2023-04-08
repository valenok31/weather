import React from "react";
import {connect} from "react-redux";
import {
    handleCurrentIp,
    handleCurrentWeather,
    handleForecastWeather, handleHistoryWeather,
    setSettings,
    toggleIsLocationView, toggleIsNotFound
} from "../../redux/weather_reducer";
import s from "./WeatherList.module.css";
import LocationOutput from "../LocationOutput/LocationOutput";
import LocationSearch from "../LocationSearch/LocationSearch";
import {HeaderContent} from "../HeaderContent";
import Preloader from "../Preloader/Preloader";
import {WeatherForecastGrid} from "./WeatherForecastGrid";
import {temperatureGradient} from "../accessoryFunctions/temperatureGradient";
import {WeatherHistoryGrid} from "./WeatherHistoryGrid";
import NothingFound from "../NothingFound/NothingFound";

class WeatherList extends React.Component {

    componentDidMount() {
        //this.props.handleCurrentIp();
        this.props.handleCurrentWeather(this.props.getSettings);
        this.props.handleForecastWeather(this.props.getSettings);
        this.props.handleHistoryWeather(this.props.getSettings);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getSettings !== prevProps.getSettings || this.props.getIsNotFound !== prevProps.getIsNotFound) {
            this.props.handleCurrentWeather(this.props.getSettings);
            this.props.handleForecastWeather(this.props.getSettings);
            this.props.handleHistoryWeather(this.props.getSettings);
        }
    }

    render() {


        if (!!this.props.getCurrentWeather.current && !!this.props.getHistoryWeather.forecast) {
            let getWeather = this.props.getCurrentWeather
            let temp = getWeather.current.temp_c;
            let currentLocation = getWeather.location
            let currentWeather = getWeather.current
            let nextDay = getWeather.forecast.forecastday
            let lastDay = this.props.getHistoryWeather.forecast.forecastday

            let windDegree = currentWeather.wind_degree;
            let windKph = currentWeather.wind_kph;
            //console.log(window)
            return (<>
                    <div>
                        <div className={s.header__top}>
                            {this.props.getIsLocationView ?
                                <LocationOutput currentLocation={currentLocation}
                                                toggleIsLocationView={this.props.toggleIsLocationView}/> :
                                <LocationSearch setSettings={this.props.setSettings}
                                                getSettings={this.props.getSettings}
                                                currentLocation={currentLocation}
                                                toggleIsLocationView={this.props.toggleIsLocationView}/>}
                        </div>
                        <div className={s.table}>
                            <div className={s.forecastday__box}>
                                <WeatherHistoryGrid nextDay={lastDay}/>
                                <WeatherForecastGrid nextDay={nextDay}/>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </>
            )
        } else {
            if (this.props.getIsNotFound) {
                return <NothingFound/>
            } else {
                return <Preloader/>
            }
        }
    }
}

let mapStateToProps = (state) => {
    return ({
        getCurrentWeather: state.weather_reducer.currentWeather,
        getForecastWeather: state.weather_reducer.forecastWeather,
        getHistoryWeather: state.weather_reducer.historyWeather,
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
        getIsNotFound: state.weather_reducer.isNotFound,
        getIsLocationView: state.weather_reducer.isLocationView,
    })
};

let resultConnecting = connect(mapStateToProps, {
    handleCurrentWeather,
    handleForecastWeather,
    handleHistoryWeather,
    setSettings,
    handleCurrentIp,
    toggleIsLocationView,
    toggleIsNotFound,
})(WeatherList);

export default resultConnecting;