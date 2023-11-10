import React from "react";
import {connect} from "react-redux";
import {
    handleCurrentIp,
    setSettings, setSettingsLanguage,
    setSettingsScaleTemperature, setSettingsTheme,
    setSettingsWV,
    toggleIsLocationView
} from "../../redux/weather_reducer";
import s from "./Setting.module.css";
import {Formik, Field, Form} from 'formik';

// TODO: localization L10N
import {l10n} from "../accessoryFunctions/localization"

class Setting extends React.Component {

    render() {
        let getWeather = this.props.getSettings
        let lang = getWeather.language;
        localStorage.setItem('test', 1);

        console.log(localStorage.getItem('test'));

        return (<>
                <Formik
                    initialValues={{
                        windVisualization: getWeather.windVisualization,
                        scaleTemperature: getWeather.scaleTemperature,
                        theme: getWeather.theme,
                        language: getWeather.language,
                    }}
                    onSubmit={(values) => {
                        this.props.setSettingsWV(values);
                        this.props.setSettingsScaleTemperature(values);
                        this.props.setSettingsTheme(values);
                        this.props.setSettingsLanguage(values);
                        console.log(values)

                    }}
                >
                    {({values}) => (
                        <Form className={s.table} onClick={() => {
                            this.props.toggleIsLocationView(true)
                        }}>
                            <div className={s.forecastday__box}>
                                <div>
                                    <span>{l10n['location'][lang]}:</span>
                                    <span>{getWeather.location}</span>
                                </div>
                                <div>
                                    <span>{l10n['language'][lang]}:</span>
                                    <label>
                                        <Field type="radio" name="language" value="en"/>
                                        English
                                    </label>
                                    <label>
                                        <Field type="radio" name="language" value="ru"/>
                                        Русский
                                    </label>
                                    <label>
                                        <Field type="radio" name="language" value="zh"/>
                                        中文
                                    </label>
                                    <label>
                                        <Field type="radio" name="language" value="es"/>
                                        Español
                                    </label>
                                </div>
                                {/*// TODO: theme*/}
                                <div>
                                    <span>{l10n['theme'][lang]}:</span>
                                    <Field type="checkbox" name="theme"/>
                                    {values.theme ? 'Светлая' : 'Тёмная'}
                                </div>
                                <div>
                                    <label>
                                        <span>{l10n['windVisualization'][lang]}:</span>
                                        <Field type="checkbox" name="windVisualization"/>
                                        {values.windVisualization ? l10n['on'][lang] : l10n['off'][lang]}
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <span>{l10n['scaleTemperature'][lang]}:</span>
                                        {/*                                        <span>{getWeather.scaleTemperature}</span>*/}
                                        <Field type="checkbox" name="scaleTemperature"/>
                                        {values.scaleTemperature ? '°C' : '°F'}

                                    </label>
                                </div>
                                <button type="submit">{l10n['submit'][lang]}</button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return ({
        getSettings: state.weather_reducer.settings,
        getIsLoading: state.weather_reducer.isLoading,
        getIsNotFound: state.weather_reducer.isNotFound,
        getIsLocationView: state.weather_reducer.isLocationView,
    })
};

let resultConnecting = connect(mapStateToProps, {
    setSettings,
    setSettingsWV,
    setSettingsScaleTemperature,
    setSettingsTheme,
    setSettingsLanguage,
    handleCurrentIp,
    toggleIsLocationView
})(Setting);

export default resultConnecting;