import React from "react";
import s from './CurrentWeather.module.css'
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
import {Location} from "../Location/Location";


class CurrentWeather extends React.Component {

    componentDidMount() {
        //this.props.handleCurrentIp();
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
            let temp = getWeather.current.temp_c;
            let currentLocation = getWeather.location
            let currentWeather = getWeather.current
            let nextDay = getWeather.forecast.forecastday
            let windDegree = currentWeather.wind_degree;
            let windKph = currentWeather.wind_kph;
            //console.log(window)

            return (<>
                    <div>
                        <Location currentLocation={currentLocation}
                                  getIsLocationView={this.props.getIsLocationView}
                                  toggleIsLocationView={this.props.toggleIsLocationView}
                                  setSettings={this.props.setSettings}
                                  getSettings={this.props.getSettings}/>

                        <HeaderContent currentWeather={currentWeather} nextDay={nextDay} windDegree={windDegree}
                                       windKph={windKph}/>
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

