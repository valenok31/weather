import React from "react";
import {connect} from "react-redux";

class WeatherList extends React.Component {

    componentDidMount() {
    }

    render() {
        return <>s</>
    }
}

let mapStateToProps = (state) => {
    return ({ })
};

let resultConnecting = connect(mapStateToProps, {})(WeatherList);

export default resultConnecting;