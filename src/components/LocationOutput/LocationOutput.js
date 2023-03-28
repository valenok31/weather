import React from "react";
import iconSearch from "../icons/iconSearch.png";
import s from "../Weather.module.css";
import {toggleIsLocationView} from "../../redux/weather_reducer";

function LocationOutput(props) {

    function isLocationView (){
      props.toggleIsLocationView(false);
    }

    return <>
        <div onClick={()=>{isLocationView()}}>
            {props.currentLocation.name} / {props.currentLocation.region}, {props.currentLocation.country}
            <span>   </span>
            <img src={iconSearch} className={s.iconSearch}/>
        </div>

    </>
}

export default LocationOutput;