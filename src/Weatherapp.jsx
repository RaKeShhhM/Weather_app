import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./Weatherapp.css"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:24,
        tempMax:25,
        humidity: 27,
        weather:"haze", 
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return (
        <div className="weather">
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}