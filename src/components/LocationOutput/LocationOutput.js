import React from "react";
import iconSearch from "../icons/iconSearch.png";
import s from "../Weather.module.css";
import {toggleIsLocationView} from "../../redux/weather_reducer";

function LocationOutput(props) {

    function isLocationView (){
        console.log('isLocationView')
        // TODO: not work
      props.toggleIsLocationView('false');
    }

    return <>
        {props.currentLocation.name} / {props.currentLocation.region}, {props.currentLocation.country}
        <img src={iconSearch} className={s.iconSearch} onClick={()=>{isLocationView()}}/>
    </>
}

export default LocationOutput;