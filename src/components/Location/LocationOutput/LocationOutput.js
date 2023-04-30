import React from "react";
import iconSearch from "../../icons/iconSearch.png";
import target from "../../icons/target.png";
import s from "../../Weather/Weather.module.css";
import {handleCurrentIp} from "../../../redux/weather_reducer";

function LocationOutput(props) {

    function isLocationView() {
        props.toggleIsLocationView(false);
    }

        function isSetSettings() {
            props.handleCurrentIp();
    }


    return <>
                <span onClick={() => {
                    isSetSettings()
                }}>
        <img src={target} className={s.iconSearch}/>
                </span>
        <span>   </span>
        <span onClick={() => {
            isLocationView()
        }}>

            {props.currentLocation.name} / {props.currentLocation.region}, {props.currentLocation.country}
            <span>   </span>
            <img src={iconSearch} className={s.iconSearch}/>
        </span>

    </>
}

export default LocationOutput;