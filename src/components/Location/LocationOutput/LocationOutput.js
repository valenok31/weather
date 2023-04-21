import React from "react";
import iconSearch from "../../icons/iconSearch.png";
import target from "../../icons/target.png";
import s from "../../Weather.module.css";

function LocationOutput(props) {

    function isLocationView() {
        props.toggleIsLocationView(false);
    }

        function isSetSettings() {
        // TODO: Where am I?
        props.setSettings({location: 'auto:ip'});
            console.log(props.getSettings.location)
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