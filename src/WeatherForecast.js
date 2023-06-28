import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "15b6ba0523386a8a73b38b2440a74dea";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecastTemp">
            <span className="tempMax">19</span>
            <span className="tempMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
