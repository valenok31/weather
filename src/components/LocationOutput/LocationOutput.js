import React from "react";
import iconSearch from "../icons/iconSearch.png";
import s from "../Weather.module.css";

function LocationOutput(props) {
    return <>
        {props.currentLocation.name} / {props.currentLocation.region}, {props.currentLocation.country}
        <img src={iconSearch} className={s.iconSearch}/>
    </>
}

export default LocationOutput;