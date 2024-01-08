import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
            temp: 10.06,
            feels_like: 9.39,
            pressure: 1022,
            humidity: 87,
            city: "Delhi",
            weather: "fog",
            Wind_speed :1.54,
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        }
    return (
        <div>
            <SearchBox updateInfo= {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}