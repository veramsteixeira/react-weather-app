import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFarhrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">ºC  |  <a href="/" onClick={showFarhrenheit}> ºF</a></span> 
            </div>
        );
    } else {
        const fahrenheit = (props.celsius * 9) / 5 + 32;
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit"><a href ="/" onClick={showCelsius}> ºC </a>  |  {""} ºF</span> 
            </div>
        );
       
    }
    
}