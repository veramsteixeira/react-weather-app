import React, { useState } from "react";
import axios from "axios";
import "./Weather.css"; 


export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:"Saturday 19:00",
            description: response.data.main.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/sunny.png",
            wind: response.data.wind.speed,
            city: response.data.name,
         });
        
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row"> 
                        <div className="col-9">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" ></input>
                        </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"></input>
                </div>
                </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img src= {weatherData.iconUrl}
                            alt= {weatherData.description} />
                            
                                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                                <span className="unit">ºC</span> 
                            
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        );

    } else {
        let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
        let units = "metric";
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&${units}`;
        axios.get(apiUrl).then(handleResponse);

    return "Loading...";

    }

    
   
}