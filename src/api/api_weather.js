import React from "react";
import axios from 'axios';

const errData = {
    "location":{"name":"Barnaul","region":"","country":"Russia","lat":53.36,"lon":83.75,"tz_id":"Asia/Barnaul","localtime_epoch":1679594161,"localtime":"2023-03-24 0:56"},
    "current":{"last_updated_epoch":1679593500,"last_updated":"2023-03-24 00:45","temp_c":-1.0,"temp_f":30.2,"is_day":0,
        "condition":{"text":"Clear","icon":"//cdn.weatherapi.com/weather/64x64/night/113.png","code":1000},
        "wind_mph":11.9,"wind_kph":19.1,"wind_degree":210,"wind_dir":"SSW","pressure_mb":1016.0,"pressure_in":30.0,"precip_mm":0.0,"precip_in":0.0,"humidity":59,"cloud":0,"feelslike_c":-3.6,"feelslike_f":25.4,"vis_km":10.0,"vis_miles":6.0,"uv":1.0,"gust_mph":8.1,"gust_kph":13.0},
    "forecast":{"forecastday":[{"date":"2023-03-24","date_epoch":1679616000,"day":{"maxtemp_c":1.1,"maxtemp_f":34.0,"mintemp_c":-5.1,"mintemp_f":22.8,"avgtemp_c":-2.2,"avgtemp_f":28.1,"maxwind_mph":8.1,"maxwind_kph":13.0,"totalprecip_mm":0.3,"totalprecip_in":0.01,"totalsnow_cm":0.26,"avgvis_km":6.3,"avgvis_miles":3.0,"avghumidity":90.0,"daily_will_it_rain":1,"daily_chance_of_rain":79,"daily_will_it_snow":0,"daily_chance_of_snow":6,"condition":{"text":"Light freezing rain","icon":"//cdn.weatherapi.com/weather/64x64/day/311.png","code":1198},"uv":1.0},"astro":{"sunrise":"06:19 AM","sunset":"06:45 PM","moonrise":"07:17 AM","moonset":"10:27 PM","moon_phase":"Waxing Crescent","moon_illumination":"7","is_moon_up":0,"is_sun_up":0},"hour":[{"time_epoch":1679590800,"time":"2023-03-24 00:00","temp_c":-4.1,"temp_f":24.6,"is_day":0,"condition":{"text":"Light snow","icon":"//cdn.weatherapi.com/weather/64x64/night/326.png","code":1213},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":243,"wind_dir":"WSW","pressure_mb":1022.0,"pressure_in":30.18,"precip_mm":0.0,"precip_in":0.0,"humidity":93,"cloud":100,"feelslike_c":-7.8,"feelslike_f":18.0,"windchill_c":-7.8,"windchill_f":18.0,"heatindex_c":-4.1,"heatindex_f":24.6,"dewpoint_c":-5.0,"dewpoint_f":23.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.5,"gust_kph":13.7,"uv":1.0},{"time_epoch":1679594400,"time":"2023-03-24 01:00","temp_c":-4.8,"temp_f":23.4,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":4.5,"wind_kph":7.2,"wind_degree":238,"wind_dir":"WSW","pressure_mb":1023.0,"pressure_in":30.2,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":100,"feelslike_c":-8.1,"feelslike_f":17.4,"windchill_c":-8.1,"windchill_f":17.4,"heatindex_c":-4.8,"heatindex_f":23.4,"dewpoint_c":-5.4,"dewpoint_f":22.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":8.1,"gust_kph":13.0,"uv":1.0},{"time_epoch":1679598000,"time":"2023-03-24 02:00","temp_c":-5.0,"temp_f":23.0,"is_day":0,"condition":{"text":"Light snow","icon":"//cdn.weatherapi.com/weather/64x64/night/326.png","code":1213},"wind_mph":4.3,"wind_kph":6.8,"wind_degree":245,"wind_dir":"WSW","pressure_mb":1023.0,"pressure_in":30.22,"precip_mm":0.1,"precip_in":0.0,"humidity":97,"cloud":100,"feelslike_c":-8.2,"feelslike_f":17.2,"windchill_c":-8.2,"windchill_f":17.2,"heatindex_c":-5.0,"heatindex_f":23.0,"dewpoint_c":-5.4,"dewpoint_f":22.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":1,"chance_of_snow":83,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.8,"gust_kph":12.6,"uv":1.0},{"time_epoch":1679601600,"time":"2023-03-24 03:00","temp_c":-5.1,"temp_f":22.8,"is_day":0,"condition":{"text":"Freezing fog","icon":"//cdn.weatherapi.com/weather/64x64/night/260.png","code":1147},"wind_mph":4.0,"wind_kph":6.5,"wind_degree":243,"wind_dir":"WSW","pressure_mb":1024.0,"pressure_in":30.24,"precip_mm":0.0,"precip_in":0.0,"humidity":97,"cloud":100,"feelslike_c":-8.1,"feelslike_f":17.4,"windchill_c":-8.1,"windchill_f":17.4,"heatindex_c":-5.1,"heatindex_f":22.8,"dewpoint_c":-5.5,"dewpoint_f":22.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":0.0,"vis_miles":0.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1679605200,"time":"2023-03-24 04:00","temp_c":-3.5,"temp_f":25.7,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":4.7,"wind_kph":7.6,"wind_degree":268,"wind_dir":"W","pressure_mb":1025.0,"pressure_in":30.26,"precip_mm":0.0,"precip_in":0.0,"humidity":95,"cloud":100,"feelslike_c":-6.7,"feelslike_f":19.9,"windchill_c":-6.7,"windchill_f":19.9,"heatindex_c":-3.5,"heatindex_f":25.7,"dewpoint_c":-4.2,"dewpoint_f":24.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":7.4,"gust_kph":11.9,"uv":1.0},{"time_epoch":1679608800,"time":"2023-03-24 05:00","temp_c":-1.7,"temp_f":28.9,"is_day":0,"condition":{"text":"Light snow","icon":"//cdn.weatherapi.com/weather/64x64/night/326.png","code":1213},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":271,"wind_dir":"W","pressure_mb":1025.0,"pressure_in":30.28,"precip_mm":0.1,"precip_in":0.0,"humidity":91,"cloud":100,"feelslike_c":-4.9,"feelslike_f":23.2,"windchill_c":-4.9,"windchill_f":23.2,"heatindex_c":-1.7,"heatindex_f":28.9,"dewpoint_c":-2.9,"dewpoint_f":26.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":69,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.2,"gust_kph":11.5,"uv":1.0},{"time_epoch":1679612400,"time":"2023-03-24 06:00","temp_c":-0.6,"temp_f":30.9,"is_day":0,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/night/122.png","code":1009},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":265,"wind_dir":"W","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":90,"cloud":96,"feelslike_c":-3.6,"feelslike_f":25.5,"windchill_c":-3.6,"windchill_f":25.5,"heatindex_c":-0.6,"heatindex_f":30.9,"dewpoint_c":-2.0,"dewpoint_f":28.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":6.9,"gust_kph":11.2,"uv":1.0},{"time_epoch":1679616000,"time":"2023-03-24 07:00","temp_c":0.1,"temp_f":32.2,"is_day":1,"condition":{"text":"Light snow","icon":"//cdn.weatherapi.com/weather/64x64/day/326.png","code":1213},"wind_mph":5.8,"wind_kph":9.4,"wind_degree":262,"wind_dir":"W","pressure_mb":1026.0,"pressure_in":30.3,"precip_mm":0.0,"precip_in":0.0,"humidity":88,"cloud":100,"feelslike_c":-3.0,"feelslike_f":26.6,"windchill_c":-3.0,"windchill_f":26.6,"heatindex_c":0.1,"heatindex_f":32.2,"dewpoint_c":-1.6,"dewpoint_f":29.1,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":7.6,"gust_kph":12.2,"uv":1.0},{"time_epoch":1679619600,"time":"2023-03-24 08:00","temp_c":0.6,"temp_f":33.1,"is_day":1,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/day/122.png","code":1009},"wind_mph":6.3,"wind_kph":10.1,"wind_degree":252,"wind_dir":"WSW","pressure_mb":1026.0,"pressure_in":30.3,"precip_mm":0.0,"precip_in":0.0,"humidity":85,"cloud":100,"feelslike_c":-2.6,"feelslike_f":27.3,"windchill_c":-2.6,"windchill_f":27.3,"heatindex_c":0.6,"heatindex_f":33.1,"dewpoint_c":-1.7,"dewpoint_f":28.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.3,"gust_kph":13.3,"uv":1.0},{"time_epoch":1679623200,"time":"2023-03-24 09:00","temp_c":1.0,"temp_f":33.8,"is_day":1,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/day/122.png","code":1009},"wind_mph":7.2,"wind_kph":11.5,"wind_degree":245,"wind_dir":"WSW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":81,"cloud":99,"feelslike_c":-2.5,"feelslike_f":27.5,"windchill_c":-2.5,"windchill_f":27.5,"heatindex_c":1.0,"heatindex_f":33.8,"dewpoint_c":-1.8,"dewpoint_f":28.8,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.4,"gust_kph":15.1,"uv":1.0},{"time_epoch":1679626800,"time":"2023-03-24 10:00","temp_c":1.1,"temp_f":34.0,"is_day":1,"condition":{"text":"Overcast","icon":"//cdn.weatherapi.com/weather/64x64/day/122.png","code":1009},"wind_mph":7.8,"wind_kph":12.6,"wind_degree":239,"wind_dir":"WSW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":80,"cloud":97,"feelslike_c":-2.6,"feelslike_f":27.3,"windchill_c":-2.6,"windchill_f":27.3,"heatindex_c":1.1,"heatindex_f":34.0,"dewpoint_c":-2.0,"dewpoint_f":28.4,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.5,"gust_kph":16.9,"uv":1.0},{"time_epoch":1679630400,"time":"2023-03-24 11:00","temp_c":1.1,"temp_f":34.0,"is_day":1,"condition":{"text":"Light snow showers","icon":"//cdn.weatherapi.com/weather/64x64/day/368.png","code":1255},"wind_mph":8.1,"wind_kph":13.0,"wind_degree":236,"wind_dir":"WSW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.1,"precip_in":0.0,"humidity":79,"cloud":100,"feelslike_c":-2.7,"feelslike_f":27.1,"windchill_c":-2.7,"windchill_f":27.1,"heatindex_c":1.1,"heatindex_f":34.0,"dewpoint_c":-2.2,"dewpoint_f":28.0,"will_it_rain":1,"chance_of_rain":79,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.7,"gust_kph":17.3,"uv":1.0},{"time_epoch":1679634000,"time":"2023-03-24 12:00","temp_c":1.0,"temp_f":33.8,"is_day":1,"condition":{"text":"Cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/119.png","code":1006},"wind_mph":7.4,"wind_kph":11.9,"wind_degree":231,"wind_dir":"SW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":77,"cloud":69,"feelslike_c":-2.6,"feelslike_f":27.3,"windchill_c":-2.6,"windchill_f":27.3,"heatindex_c":1.0,"heatindex_f":33.8,"dewpoint_c":-2.6,"dewpoint_f":27.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.3,"gust_kph":16.6,"uv":1.0},{"time_epoch":1679637600,"time":"2023-03-24 13:00","temp_c":1.1,"temp_f":34.0,"is_day":1,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},"wind_mph":6.7,"wind_kph":10.8,"wind_degree":225,"wind_dir":"SW","pressure_mb":1026.0,"pressure_in":30.3,"precip_mm":0.0,"precip_in":0.0,"humidity":79,"cloud":35,"feelslike_c":-2.2,"feelslike_f":28.0,"windchill_c":-2.2,"windchill_f":28.0,"heatindex_c":1.1,"heatindex_f":34.0,"dewpoint_c":-2.2,"dewpoint_f":28.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":8.9,"gust_kph":14.4,"uv":2.0},{"time_epoch":1679641200,"time":"2023-03-24 14:00","temp_c":-0.3,"temp_f":31.5,"is_day":1,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},"wind_mph":5.8,"wind_kph":9.4,"wind_degree":218,"wind_dir":"SW","pressure_mb":1026.0,"pressure_in":30.3,"precip_mm":0.0,"precip_in":0.0,"humidity":87,"cloud":31,"feelslike_c":-3.5,"feelslike_f":25.7,"windchill_c":-3.5,"windchill_f":25.7,"heatindex_c":-0.3,"heatindex_f":31.5,"dewpoint_c":-2.2,"dewpoint_f":28.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":9.4,"gust_kph":15.1,"uv":2.0},{"time_epoch":1679644800,"time":"2023-03-24 15:00","temp_c":-2.5,"temp_f":27.5,"is_day":1,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":207,"wind_dir":"SSW","pressure_mb":1027.0,"pressure_in":30.32,"precip_mm":0.0,"precip_in":0.0,"humidity":93,"cloud":47,"feelslike_c":-5.8,"feelslike_f":21.6,"windchill_c":-5.8,"windchill_f":21.6,"heatindex_c":-2.5,"heatindex_f":27.5,"dewpoint_c":-3.4,"dewpoint_f":25.9,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":10.0,"vis_miles":6.0,"gust_mph":10.5,"gust_kph":16.9,"uv":2.0},{"time_epoch":1679648400,"time":"2023-03-24 16:00","temp_c":-3.1,"temp_f":26.4,"is_day":1,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/day/143.png","code":1030},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":207,"wind_dir":"SSW","pressure_mb":1027.0,"pressure_in":30.33,"precip_mm":0.0,"precip_in":0.0,"humidity":95,"cloud":77,"feelslike_c":-6.5,"feelslike_f":20.3,"windchill_c":-6.5,"windchill_f":20.3,"heatindex_c":-3.1,"heatindex_f":26.4,"dewpoint_c":-3.9,"dewpoint_f":25.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":10.7,"gust_kph":17.3,"uv":1.0},{"time_epoch":1679652000,"time":"2023-03-24 17:00","temp_c":-3.2,"temp_f":26.2,"is_day":1,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/day/143.png","code":1030},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":211,"wind_dir":"SSW","pressure_mb":1027.0,"pressure_in":30.33,"precip_mm":0.0,"precip_in":0.0,"humidity":95,"cloud":90,"feelslike_c":-6.6,"feelslike_f":20.1,"windchill_c":-6.6,"windchill_f":20.1,"heatindex_c":-3.2,"heatindex_f":26.2,"dewpoint_c":-3.9,"dewpoint_f":25.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":10.3,"gust_kph":16.6,"uv":1.0},{"time_epoch":1679655600,"time":"2023-03-24 18:00","temp_c":-3.0,"temp_f":26.6,"is_day":1,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/day/143.png","code":1030},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":208,"wind_dir":"SSW","pressure_mb":1027.0,"pressure_in":30.32,"precip_mm":0.0,"precip_in":0.0,"humidity":95,"cloud":21,"feelslike_c":-6.4,"feelslike_f":20.5,"windchill_c":-6.4,"windchill_f":20.5,"heatindex_c":-3.0,"heatindex_f":26.6,"dewpoint_c":-3.6,"dewpoint_f":25.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":9.4,"gust_kph":15.1,"uv":1.0},{"time_epoch":1679659200,"time":"2023-03-24 19:00","temp_c":-3.3,"temp_f":26.1,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":5.1,"wind_kph":8.3,"wind_degree":205,"wind_dir":"SSW","pressure_mb":1027.0,"pressure_in":30.32,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":25,"feelslike_c":-6.7,"feelslike_f":19.9,"windchill_c":-6.7,"windchill_f":19.9,"heatindex_c":-3.3,"heatindex_f":26.1,"dewpoint_c":-3.9,"dewpoint_f":25.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":9.4,"gust_kph":15.1,"uv":1.0},{"time_epoch":1679662800,"time":"2023-03-24 20:00","temp_c":-4.4,"temp_f":24.1,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":201,"wind_dir":"SSW","pressure_mb":1026.0,"pressure_in":30.31,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":28,"feelslike_c":-8.1,"feelslike_f":17.4,"windchill_c":-8.1,"windchill_f":17.4,"heatindex_c":-4.4,"heatindex_f":24.1,"dewpoint_c":-4.9,"dewpoint_f":23.2,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":11.2,"gust_kph":18.0,"uv":1.0},{"time_epoch":1679666400,"time":"2023-03-24 21:00","temp_c":-4.5,"temp_f":23.9,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":5.6,"wind_kph":9.0,"wind_degree":199,"wind_dir":"SSW","pressure_mb":1026.0,"pressure_in":30.3,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":26,"feelslike_c":-8.4,"feelslike_f":16.9,"windchill_c":-8.4,"windchill_f":16.9,"heatindex_c":-4.5,"heatindex_f":23.9,"dewpoint_c":-5.0,"dewpoint_f":23.0,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":11.6,"gust_kph":18.7,"uv":1.0},{"time_epoch":1679670000,"time":"2023-03-24 22:00","temp_c":-4.7,"temp_f":23.5,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":198,"wind_dir":"SSW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":22,"feelslike_c":-8.5,"feelslike_f":16.7,"windchill_c":-8.5,"windchill_f":16.7,"heatindex_c":-4.7,"heatindex_f":23.5,"dewpoint_c":-5.3,"dewpoint_f":22.5,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":11.2,"gust_kph":18.0,"uv":1.0},{"time_epoch":1679673600,"time":"2023-03-24 23:00","temp_c":-4.8,"temp_f":23.4,"is_day":0,"condition":{"text":"Mist","icon":"//cdn.weatherapi.com/weather/64x64/night/143.png","code":1030},"wind_mph":5.4,"wind_kph":8.6,"wind_degree":194,"wind_dir":"SSW","pressure_mb":1026.0,"pressure_in":30.29,"precip_mm":0.0,"precip_in":0.0,"humidity":96,"cloud":19,"feelslike_c":-8.6,"feelslike_f":16.5,"windchill_c":-8.6,"windchill_f":16.5,"heatindex_c":-4.8,"heatindex_f":23.4,"dewpoint_c":-5.4,"dewpoint_f":22.3,"will_it_rain":0,"chance_of_rain":0,"will_it_snow":0,"chance_of_snow":0,"vis_km":2.0,"vis_miles":1.0,"gust_mph":11.2,"gust_kph":18.0,"uv":1.0}]}]}};



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
                // TODO: response in case of error
                console.log('no data')
                return errData;
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
                // TODO: response in case of error
                console.log('no data')
                return errData;
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
                // TODO: response in case of error
                console.log('no data')
            })
    },
}

