import React from "react";
import s from "../Weather/Weather.module.css";
import {windVisualization} from "../accessoryFunctions/windVisualization";
import {temperatureGradient} from "../accessoryFunctions/temperatureGradient";
import direction from "../icons/direction.png";
// TODO: localization L10N
import {l10n} from "../accessoryFunctions/localization"
import {dateConverter} from "../accessoryFunctions/dateСonverter";


export function HeaderContent(props) {

    let tempI = props.currentWeather.temp_c
    tempI = Math.round(tempI) + '°';
    if (!props.getSettings.scaleTemperature) {
        tempI = props.currentWeather.temp_f
        tempI = Math.round(tempI) + '°F';
    }

    let windDegree = props.currentWeather.wind_degree
    let windKph = props.currentWeather.wind_mph;
    let lang = props.getSettings.language;

    return <div className={s.header} style={temperatureGradient(props.currentWeather.temp_c)}>
        <div className={s.container}>
            <div className={s.header__content}>
                {windVisualization(windDegree, windKph, props.getSettings.windVisualization)}
                <div className={s.content__current_weather}>
                    <div className={s.content__data_current}>
                        {dateConverter(props.currentWeather.last_updated,true, lang)}
                        <img src={props.currentWeather.condition.icon} alt={props.currentWeather.condition.text}/>
                    </div>
                    <div className={s.content__temp_current}>
                        {tempI > 0 ? '+' : ''}{tempI}
                    </div>
                    <div className={s.content__details_current}>
                        <div className={s.details_current__parameter}>{l10n['pressure'][lang]}:</div>
                        <div className={s.details_current__value}>
                            {Math.round(props.currentWeather.pressure_mb * 0.750064)} {l10n['mmHg'][lang]}
                        </div>
                        <div className={s.details_current__parameter}>{l10n['humidity'][lang]}:</div>
                        <div className={s.details_current__value}>{Math.round(props.currentWeather.humidity)}%
                        </div>
                        <div className={s.details_current__parameter}>{l10n['wind'][lang]}:</div>
                        <div
                            className={s.details_current__value}>{Math.round(windKph * 10 / 3.6) / 10} {l10n['m/s'][lang]}
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
