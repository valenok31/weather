import React from "react";
import {connect} from "react-redux";
import {setSettings, toggleIsLocationView} from "../../redux/weather_reducer";
import s from "./NothingFound.module.css";
import LocationSearch from "../Location/LocationSearch/LocationSearch";

class NothingFound extends React.Component {


    render() {

        return (<>
                <div>
                    <div className={s.header__top}>
                        <div>Nothing Found</div>
                    </div>
                    <div className={s.table}>

                        <div className={s.forecastday__box}>
                            <div></div>
                            <LocationSearch setSettings={this.props.setSettings}
                                            currentLocation={{name: ''}}
                                            toggleIsLocationView={this.props.toggleIsLocationView}/>
                            <div></div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </>
        )

    }
}

let mapStateToProps = (state) => {
    return ({
        getIsLocationView: state.weather_reducer.isLocationView,
    })
};

let resultConnecting = connect(mapStateToProps, {
    setSettings,
    toggleIsLocationView
})(NothingFound);

export default resultConnecting;