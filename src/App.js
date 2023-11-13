import s from './App.module.css'
import {Link, Route, Routes} from 'react-router-dom';
import React, {createContext} from "react";
import Weather from "./components/Weather/Weather";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherList from "./components/WeatherList/WeatherList";
import LocationClass from "./components/Location/LocationClass";
import Setting from "./components/Setting/Setting";
// TODO: localization L10N
import {l10n} from "./components/accessoryFunctions/localization"
import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./components/Login/Login";


class App extends React.Component {

    render() {

        let lang = this.props.getSettings.language
        return (<div className={s.app__header}>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">{l10n['Forecast for 3 days (hourly)'][lang]}</Link>
                        </li>
                        <li>
                            <Link to="/weatherlist">{l10n['Forecast for 3 days (list)'][lang]}</Link>
                        </li>
                        <li>
                            <Link to="/current">{l10n['Current'][lang]}</Link>
                        </li>
                        <li>
                            <Link to="/setting">{l10n['Setting'][lang]}</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <LocationClass/>
                    <Routes>
                        <Route path='/' element={<Weather stateButton='0'/>}/>
                        <Route path='/weatherlist' element={<WeatherList/>}/>
                        <Route path='/current' element={<CurrentWeather/>}/>
                        <Route path='/setting' element={<Setting/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    getSettings: state.weather_reducer.settings,
});

export default compose(
    connect(mapStateToProps, {}))
(App);
