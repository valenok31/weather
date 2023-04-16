import React, {useState} from "react";
import s from "./Weather.module.css";
import {windVisualization} from "./accessoryFunctions/windVisualization";
import {temperatureGradient} from "./accessoryFunctions/temperatureGradient";
import direction from "./icons/direction.png";
// TODO: localization L10N
import {l10n} from "./accessoryFunctions/localization"


let d = 0;
let h = 0;
let initializeK= 0;


function dayHours(k) {
    if (k <= 71) {
        d = 2;
        h = k-48;
    }
    if (k <= 47) {
        d = 1;
        h = k-24;
    }
    if (k <= 23) {
        d = 0;
        h = k;
    }
}


export function HeaderContent(props) {
    let date = new Date(props.currentWeather.last_updated);
    initializeK = date.getHours();

    const [k, valueChange] = useState(initializeK);

    dayHours(k);

    let tempI = props.nextDay[d].hour[h].temp_c;
    tempI = Math.round(tempI)+'°';
    if(!props.getSettings.scaleTemperature){
        tempI = props.nextDay[d].hour[h].temp_f;
        tempI = Math.round(tempI)+'°F';
    }


    let windDegree = props.nextDay[d].hour[h].wind_degree
    let windKph = props.nextDay[d].hour[h].wind_mph;

    let lang=props.getSettings.language;

    function getOnWheel(e) {
        if (e.deltaY < initializeK) {
            if (k < initializeK) valueChange(initializeK)
            if (k > initializeK) valueChange(k - 1)
        }
        if (e.deltaY > initializeK) {
            if (k > 71) valueChange(71)
            if (k < 71) valueChange(k + 1)
        }
    }

    // TODO: isLocationView onClick
    function isLocationView() {
        props.toggleIsLocationView(true);
    }


    return <div className={s.header} style={temperatureGradient(props.nextDay[d].hour[h].temp_c)} onClick={() => {
        isLocationView();
    }}>
        <div className={s.container}>
            <div className={s.header__content} onWheel={(e) => getOnWheel(e)}>
                {windVisualization(windDegree, windKph, props.getSettings.windVisualization)}
                <div className={s.content__current_weather}>
                    <div className={s.content__data_current}>
                        {props.nextDay[d].hour[h].time}
                        <img src={props.nextDay[d].hour[h].condition.icon} alt={props.nextDay[d].hour[h].condition.text}/>
                    </div>
                    <div className={s.content__temp_current}>
                        {tempI > 0 ? '+' : ''}{tempI}
                    </div>
                    <div className={s.content__details_current}>
                        <div className={s.details_current__parameter}>{l10n['pressure'][lang]}:</div>
                        <div className={s.details_current__value}>
                            {Math.round(props.nextDay[d].hour[h].pressure_mb * 0.750064)} {l10n['mmHg'][lang]}
                        </div>
                        <div className={s.details_current__parameter}>{l10n['humidity'][lang]}:</div>
                        <div className={s.details_current__value}>{Math.round(props.nextDay[d].hour[h].humidity)}%
                        </div>
                        <div className={s.details_current__parameter}>{l10n['wind'][lang]}:</div>
                        <div
                            className={s.details_current__value}>{Math.round(props.nextDay[d].hour[h].wind_mph * 10 / 3.6) / 10} {l10n['m/s'][lang]}
                            {/*({props.nextDay[d].hour[h].wind_dir})*/}
                            <div className={s.img_direction__circle}>
                                <img src={direction} className={s.img__direction}
                                     style={{transform: `rotate(${props.nextDay[d].hour[h].wind_degree + 180}deg)`}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
