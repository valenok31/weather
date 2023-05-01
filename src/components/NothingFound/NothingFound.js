import React from "react";
import {connect} from "react-redux";
import {handleCurrentIp, setSettings, toggleIsLocationView} from "../../redux/weather_reducer";
import s from "./NothingFound.module.css";
import LocationSearch from "../Location/LocationSearch/LocationSearch";
import target from "../icons/target.png";

class NothingFound extends React.Component {


    render() {

        function isSetSettings() {
            // TODO: not work:(
            //this.props.handleCurrentIp();
        }

        return (<>
                <div>
                    <div className={s.header__top}>
                        <div>Nothing Found</div>
                    </div>
                    <div className={s.table}>

                        <div className={s.forecastday__box}>
                            <div></div>
                            <span onClick={() => {
                                isSetSettings()
                            }}>
                                <img src={target} className={s.iconSearch}/>
                            </span>
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
    toggleIsLocationView,
    handleCurrentIp
})(NothingFound);

export default resultConnecting;