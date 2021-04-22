import React, { useEffect, useState } from 'react';
import '../App.css'
import axios from 'axios';
import GetWeatherData from './GetWeatherData';

function App(){
    const [weatherdata, setWeatherData] = useState(null);
    const [city, setCity] = useState('Gdańsk');
    const [loading, isLoading] = useState(false);

    const getData = async () => {
        isLoading(true);
        const data = await GetWeatherData(city);
        setWeatherData(data);
        isLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <div className="weather">
            <form className="searchbar" onSubmit={(event) => {
                event.preventDefault();
                getData();
            }}>
                <div className="searchbox">    
                    <input type="text" class="searchtext" value={city} onChange={(event) => setCity(event.target.value)} 
                    placeholder="Wpisz nazwę miasta"/>
                </div>
            </form>
            <div className="weather__inner">
            <div className="current"><h1>Aplikacja pogoda</h1></div>

          {weatherdata !== null ? (
          <div className="current">
            
            <h3><b className="current city">{weatherdata.name}</b> | {weatherdata.sys.country}</h3>
            
            <div className="current  description"><h3>{weatherdata.weather[0].description}</h3></div>
            <div className="current  temperature">
              <h1>{parseFloat(weatherdata.main.temp).toFixed(1)}&deg;C</h1>
            </div>
            
            <div className="current  details">
              <h4>Czuje się jak: {parseFloat(weatherdata.main.feels_like).toFixed(1)}&deg;C  
              || Wilgotność: {weatherdata.main.humidity}%</h4>
            </div>
        </div>
        ) : null}
            </div>
            

        </div>

        
        
    )
}

export default App;