import React from "react";
import s from "./WeatherList.module.css";
import direction from "../icons/direction.png";
import {temperatureGradient} from "../accessoryFunctions/temperatureGradient";
import {dateConverter} from "../accessoryFunctions/dateСonverter";
import {l10n} from "../accessoryFunctions/localization";

export function WeatherHistoryGrid(props) {

    let lang=props.getSettings.language;
    function roundFunc(numbers) {
        if(!props.getSettings.scaleTemperature){
            numbers = numbers*9/5+32;
            return (numbers > 0 ? '+' : '') + Math.round(numbers)+'°F';
        }
        return (numbers > 0 ? '+' : '') + Math.round(numbers)+'°C';
    }

    let nextDayArr = props.nextDay.map((forecastday) => {
        return <div className={s.forecastday__day}
                    style={temperatureGradient(forecastday.day.maxtemp_c)}>
            <div><b>{dateConverter(forecastday.date,false,lang)}</b></div>
            <div>{roundFunc(forecastday.day.mintemp_c)} ... {roundFunc(forecastday.day.maxtemp_c)}</div>
            <div>{forecastday.day.maxwind_mph} m/s
                <div className={s.img_direction__circle}>
                    <img src={direction} className={s.img__direction}
                         style={{transform: `rotate(${forecastday.hour[0].wind_degree + 180}deg)`}}/>
                </div>
            </div>

            <div>{forecastday.day.avghumidity} %</div>
            <div><img src={forecastday.day.condition.icon} alt={forecastday.day.condition.text}/>
            </div>
        </div>
    })
    return <>{nextDayArr}</>
}