import React from "react";
import s from "./WeatherList.module.css";
import direction from "../icons/direction.png";
import {temperatureGradient} from "../accessoryFunctions/temperatureGradient";

export function WeatherForecastGrid(props) {

    let nextDayArr = props.nextDay.map((forecastday) => {
        // TODO: css!!
        return <div className={s.forecastday__day}  style={temperatureGradient((forecastday.day.maxtemp_c+forecastday.day.mintemp_c)/2)}>
            <div><b>{forecastday.date}</b></div>
            <div>{forecastday.day.mintemp_c}°C ... {forecastday.day.maxtemp_c}°C</div>
            <div>{forecastday.day.maxwind_mph} m/s
                <div className={s.img_direction__circle}><img src={direction}  className={s.img__direction} style={{transform: `rotate(${forecastday.hour[0].wind_degree+180}deg)`}}/></div>
            </div>

            <div>{forecastday.day.avghumidity} %</div>
            <div><img src={forecastday.day.condition.icon} alt={forecastday.day.condition.text}/>
            </div>
        </div>
    })
    return <div className={s.forecastday__box}>
        {nextDayArr}
    </div>
}