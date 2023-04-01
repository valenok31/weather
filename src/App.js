import s from './App.module.css'
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import React from "react";
import Weather from "./components/Weather";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherList from "./components/WeatherList/WeatherList";


let App = () => {

    return (<div className={s.app__header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Forecast for 3 days (hourly)</Link>
                    </li>
                    <li>
                        <Link to="/weatherlist">Forecast for 3 days (list)</Link>
                    </li>
                    <li>
                        <Link to="/current">Current</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Weather stateButton='0'/>}/>
                <Route path='/weatherlist' element={<WeatherList/>}/>
                <Route path='/current' element={<CurrentWeather/>}/>
            </Routes>
        </div>
    )
}

export default App;
