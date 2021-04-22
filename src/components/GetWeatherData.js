import React from 'react';
import axios from 'axios';

export const GetWeatherData = async (cityname) => {
    const {data} = await axios.get('http://api.openweathermap.org/data/2.5/weather?',{
        params: {
            q: cityname, 
            appid: '2500114849d9d89c39106d52ef738be7',
            units: 'metric',
            lang: 'pl'
        }
    })    
    return data;
}

export default GetWeatherData; 