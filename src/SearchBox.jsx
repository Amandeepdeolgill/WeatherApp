import "./SearchBox.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
 

export default function SearchBox({updateInfo}) {
    let[city,setCity] = useState("");
    let[error,setError] = useState(false);
    let ApiKey = "3ca28d90fca76143ffd5e2c097d5a43d";
    let ApiUrl = "https://api.openweathermap.org/data/2.5/weather";

    let getWeatherInfo = async() => {
        try {
        let response = await fetch(`${ApiUrl}?q=${city}&appid=${ApiKey}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            temp: jsonResponse.main.temp,
            feels_like: jsonResponse.main.feels_like,
            pressure: jsonResponse.main.pressure,
            humidity: jsonResponse.main.humidity,
            city: jsonResponse.name,
            weather: jsonResponse.weather[0].description,
            Wind_speed :jsonResponse.wind.speed,
        }
        console.log(result);
        return result;
    }catch(err) {
        throw err;
  }
}   
    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    let handleSubmit = async(event) => {
        try {
        event.preventDefault();
        console.log(city);
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
            <TextField id="outlined" label="City Name" placeholder="Enter City Name:" value={city} onChange={handleChange} required focused/>
            <br/><br/>
            <Button variant="outlined" size="large" type="submit" color="primary"><b>Search!</b></Button>
            {error && <p>No such place exists in our Api!</p>}
            </form>
        </div>
    );
}