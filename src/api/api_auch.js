import React from "react";
import axios from 'axios';

const errData = {
};

let date = new Date();
let fMonth = ['01','02','03','04','05','06','07','08','09','10','11','12'];
date.setDate(date.getDate() - 1);
let data_end = date.getDate();
let month_end = date.getMonth();
let year_end = date.getFullYear();
if(data_end<10){
    data_end = '0' + data_end
}
let end_dt = year_end + '-' + fMonth[month_end] + '-' + data_end

date.setDate(date.getDate() - 5);
let data = date.getDate()
let month = date.getMonth()
let year = date.getFullYear()
if(data<10){
    data = '0' + data
}
let dt = year + '-' + fMonth[month] + '-' + data


export const fetchWeather = {

    fromCurrent(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&days=5`)
            .then(response => {
                return response.data;
            })
/*            .catch((err) => {
                // TODO: response in case of error
               // console.log('no data')
                return errData;
            })*/
    },
    fromForecast(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`forecast.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&days=5`)
            .then(response => {
                return response.data;
            })
/*            .catch((err) => {
                // TODO: response in case of error
               // console.log('no data')
                return errData;
            })*/
    },
    fromHistory(settings) {
        const instanceRecreation = axios.create({
            baseURL: `https://api.weatherapi.com/v1/`,
        })
        return instanceRecreation.get(`history.json?key=4e29dfe6fb834ea29ab152532232301&q=${settings.location}&end_dt=${end_dt}&dt=${dt}`)
            .then(response => {
                return response.data;
            })

    },
}

export const fetchIp = {
    fromCurrent() {
        return axios.get('https://ipapi.co/json/')
            .then(response => {
                return response.data;
            })
            .catch((err) => {
                // TODO: response in case of error
                console.log('no data')
            })
    },
}

