import React, {useState} from "react";
import s from "../Weather.module.css";
import {windVisualization} from "../accessoryFunctions/windVisualization";
import {temperatureGradient} from "../accessoryFunctions/temperatureGradient";
import direction from "../icons/direction.png";

export function HeaderContent(props) {

    let tempI = props.currentWeather.temp_c
    tempI = Math.round(tempI);

    let windDegree = props.currentWeather.wind_degree
    let windKph = props.currentWeather.wind_mph;

    return <div className={s.header} style={temperatureGradient(tempI)}>
        <div className={s.container}>
            <div className={s.header__content}>
                {windVisualization(windDegree, windKph, props.getSettings.windVisualization)}
                <div className={s.content__current_weather}>
                    <div className={s.content__data_current}>
                        {props.currentWeather.last_updated}
                        <img src={props.currentWeather.condition.icon} alt={props.currentWeather.condition.text}/>
                    </div>
                    <div className={s.content__temp_current}>
                        {tempI > 0 ? '+' : ''}{tempI}°
                    </div>
                    <div className={s.content__details_current}>
                        <div className={s.details_current__parameter}>Pressure:</div>
                        <div className={s.details_current__value}>
                            {Math.round(props.currentWeather.pressure_mb * 0.750064)} mmHg
                        </div>
                        <div className={s.details_current__parameter}>Humidity:</div>
                        <div className={s.details_current__value}>{Math.round(props.currentWeather.humidity)}%
                        </div>
                        <div className={s.details_current__parameter}>Wind:</div>
                        <div
                            className={s.details_current__value}>{Math.round(windKph * 10 / 3.6) / 10} m/s
                            <div className={s.img_direction__circle}>
                                <img src={direction} className={s.img__direction}
                                     style={{transform: `rotate(${props.currentWeather.wind_degree + 180}deg)`}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
