import React from "react";
import axios from 'axios';



export const fetchWeather  = {

    fromCurrent(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&days=5`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                console.log('no data')
            })
    },
    fromForecast(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&days=5`)
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                console.log('no data')
            })
    },

}

export const fetchIp  = {
    fromCurrent() {
        return axios.get('https://ipapi.co/json/')
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                console.log('no data')
            })
    },
}

