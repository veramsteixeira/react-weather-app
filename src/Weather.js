import React from "react";
import "./Weather.css"; 


export default function Weather(){
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
            <h1>Porto</h1>
            <ul>
                <li>Friday 15:30</li>
                <li>Sunny</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" className="float-left" />
                        
                            <span className="temperature">27</span>
                            <span className="unit">ºC</span> 
                        
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 1%</li>
                        <li>Humidity: 56%</li>
                        <li>Wind: 16 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}