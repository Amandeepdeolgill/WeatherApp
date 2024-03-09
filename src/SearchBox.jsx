import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import React from "react";
import "dotenv";



export default function SearchBox({updateInfo}) {
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);

        const apiKey = import.meta.env.VITE_API_KEY;
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


    let getWeatherInfo = async() => {
        try {
        let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
        let jsonResponse = await response.json();


        
        let result = {
            temp: jsonResponse.main.temp,
            feels_like: jsonResponse.main.feels_like,
            pressure: jsonResponse.main.pressure,
            humidity: jsonResponse.main.humidity,
            city: jsonResponse.name,
            weather: jsonResponse.weather[0].description,
            Wind_speed :jsonResponse.wind.speed,
        }

        
        return result;
    }
    catch(err) {
        throw err;
  }
}   
    

    let handleChange = (event) => {
        setCity(event.target.value);
    };



    let handleSubmit = async(event) => {
        try {
        event.preventDefault();
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
    };



    return (
        <div className="SearchBox">
            <h1>WeatherWhiz App</h1>
            <form onSubmit={handleSubmit}>
            <TextField className="textfield" id="outlined" label="City Name" placeholder="Enter City Name:" value={city} onChange={handleChange} required focused/>
            <br/><br/>
            <Button className="btn" variant="contained" size="large" type="submit"><b>Search!</b></Button>
            {error && <p>No such place exists in our Api!</p>}
            </form>
        </div>
    );
}