import React, {useState} from "react";
import s from "./Weather.module.css";
import {windVisualization} from "./accessoryFunctions/windVisualization";
import {temperatureGradient} from "./accessoryFunctions/temperatureGradient";


export function HeaderContent(props) {

    const [k, valueChange] = useState(0);

    let tempI = props.nextDay[1].hour[k].temp_c
    tempI = Math.round(tempI);

    let windDegree = props.nextDay[1].hour[k].wind_degree
    let windKph = props.nextDay[1].hour[k].wind_mph;

    function getOnWheel(e) {
        if (e.deltaY < 0) {
            if (k < 0) valueChange(0)
            if (k > 0) valueChange(k - 1)
        }
        if (e.deltaY > 0) {
            if (k > 23) valueChange(23)
            if (k < 23) valueChange(k + 1)
        }
    }

    return <div className={s.header} style={temperatureGradient(tempI)}>
        <div className={s.container}>
            <div className={s.header__content} onWheel={(e) => getOnWheel(e)}>
                {windVisualization(windDegree, windKph)}
                <div className={s.content__current_weather}>
                    <div className={s.content__data_current}>
                        {props.nextDay[1].hour[k].time}
                    </div>
                    <div className={s.content__temp_current}>
                        {tempI > 0 ? '+' : ''}{tempI}°
                    </div>
                    <div className={s.content__details_current}>
                        <div className={s.details_current__parameter}>Pressure:</div>
                        <div className={s.details_current__value}>
                            {Math.round(props.nextDay[1].hour[k].pressure_mb * 0.750064)} mmHg
                        </div>
                        <div className={s.details_current__parameter}>Humidity:</div>
                        <div className={s.details_current__value}>{Math.round(props.nextDay[1].hour[k].humidity)}%
                        </div>
                        <div className={s.details_current__parameter}>Wind:</div>
                        <div
                            className={s.details_current__value}>{Math.round(props.nextDay[1].hour[k].wind_mph * 10 / 3.6) / 10} m/s
                            ({props.nextDay[1].hour[k].wind_dir})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
