import React, {useState, useEffect} from 'react';
import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const apiKey = '603c63f41fd1b9ccdce4fba0730bfb9f';
const cityname = 'Cupertino'

function Weather() {

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            const {data} = await getWeather(cityname);
            setWeatherData(data);
            setLoading(true);
            console.log(data);
        }catch(error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        getData();
    }, []);

    const Interval = setInterval( ()=>{getData()},3600000); 
    
    useEffect(() => {
        return() => {
            clearInterval(Interval); 
        }
    }, [Interval]);

    var styles = {
        temp: {
            fontSize: "45px",
            display: "flex", 
            },
        rest: {
            fontSize: "16px",
            flexWrap: "wrap",
            allignContent: "flex-end"
            
        }
      }
    return  <div> 
            <div style={styles.temp}>
                {loading && parseFloat(weatherData?.main?.temp-273.15).toFixed(1)}&deg;C
                    <div style={styles.rest}>
                        <div>High Temp: {loading && parseFloat(weatherData?.main?.temp_max-273.15).toFixed(1)}&deg;C</div>
                        <div>Low Temp: {loading && parseFloat(weatherData?.main?.temp_min-273.15).toFixed(1)}&deg;C</div>
                        <div>Conditions: {loading && (weatherData?.weather[0]?.description)}</div>
                    </div>
                </div> 
            </div>


}

export const getWeather = async (cityname) => {
    try {
        const data = await axios.get(baseUrl +  `q=${cityname}&appid=${apiKey}`);

        return data;
    } catch(error) {
        throw error;
    }
}

export default Weather