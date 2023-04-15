import s from "../Weather.module.css";
import {windDirectionStyle} from "./windDirectionStyle";
import React from "react";

export const windVisualization = (windDegree, windKph,getWindVisualization=true) => {
    let maxLayer = 9;
    let arr = []
    if(getWindVisualization) {
        for (let i = 0; i <= maxLayer; i++) {
            arr.push(<div className={s.windDirection} key={i}
                          style={windDirectionStyle(windDegree, windKph, i * 1 - maxLayer)}></div>)
        }
    }
        return arr


}