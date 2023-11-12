import React, {useEffect} from "react";
import {
    handleCurrentIp,
    handleCurrentWeather,
    handleForecastWeather,
    setSettings,
    toggleIsLocationView
} from "../../redux/weather_reducer";
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";
import {HeaderContent} from "./HeaderContent";
import NothingFound from "../NothingFound/NothingFound";


class Weather7 extends React.Component {

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
}


 function Weather (props) {


    useEffect(()=>{
        props.handleCurrentWeather(props.getSettings);
        props.handleForecastWeather(props.getSettings);
    },[props.getSettings]);




        if (!!props.getCurrentWeather.current) {
            let getWeather = props.getCurrentWeather
            let currentWeather = getWeather.current
            let nextDay = getWeather.forecast.forecastday;



            return (<div>
                    <HeaderContent currentWeather={currentWeather}
                                   nextDay={nextDay}
                                   toggleIsLocationView={props.toggleIsLocationView}
                                   getSettings={props.getSettings}/>
                </div>
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
})(Weather);

export default resultConnecting;