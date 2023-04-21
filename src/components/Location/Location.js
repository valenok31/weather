import React from "react";
import LocationOutput from "./LocationOutput/LocationOutput";
import LocationSearch from "./LocationSearch/LocationSearch";
import s from "./Location.module.css";

export function Location(props) {
    return <div className={s.header__top}>
        {props.getIsLocationView ?
            <LocationOutput currentLocation={props.currentLocation}
                            toggleIsLocationView={props.toggleIsLocationView}
                            setSettings={props.setSettings}/> :
            <LocationSearch setSettings={props.setSettings}
                            getSettings={props.getSettings}
                            currentLocation={props.currentLocation}
                            toggleIsLocationView={props.toggleIsLocationView}/>}
    </div>
}