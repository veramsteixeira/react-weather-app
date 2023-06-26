import React from 'react';
import './App.css';
import Weather from "./Weather"; 

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Porto" />
     <footer>
      This project was coded by Vera Teixeira and is
      <a href="https://github.com/veramsteixeira/react-weather-app" target="_blank" rel="noopener noreferrer" > open-sourced on GitHub</a>  
      </footer>
      </div>
    </div>
  );
}


