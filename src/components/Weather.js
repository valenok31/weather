import React from "react";
import s from './Weather.module.css'
import {handleCurrentWeather, setSettings} from "../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "./Preloader/Preloader";
import LocationSearch from "./LocationSearch/LocationSearch";
import {temperatureGradient} from "./accessoryFunctions/temperatureGradient";
import {windVisualization} from "./accessoryFunctions/windVisualization";
import {HeaderContent} from "./HeaderContent";
import iconSearch from "./icons/iconSearch.png"

class Weather extends React.Component {

    componentDidMount() {
        this.props.handleCurrentWeather(this.props.getSettings);
    }

    componentDidUpdate(prevProps) {
        if (this.props.getSettings !== prevProps.getSettings) {
            this.props.handleCurrentWeather(this.props.getSettings);
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
                        {currentLocation.name} / {currentLocation.region}, {currentLocation.country}
                        <img src={iconSearch} className={s.iconSearch}/>

                        <LocationSearch setSettings={this.props.setSettings}
                                        getSettings={this.props.getSettings}/>

                    </div>
                    <div className={s.header} style={temperatureGradient(temp)}>

                        {/*{windKph < 5 ? <div> </div> : windVisualization(windDegree, windKph)}*/}
                        <div className={s.container}>

                            <HeaderContent currentWeather={currentWeather} nextDay={nextDay} windDegree={windDegree}
                                           windKph={windKph}/>
                        </div>
                    </div>
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
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
    })
};

let resultConnecting = connect(mapStateToProps, {handleCurrentWeather, setSettings})(Weather);

export default resultConnecting;

