import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react';

import "./InfoBox.css";
export default function InfoBox({info}) {
  let ColdUrl = "https://images.unsplash.com/photo-1484313544071-4d67c88b99be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  let RainUrl = "https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HotUrl = "https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <Card className='card' md={{ maxWidth: 900 }}>
        <CardMedia
          component="img"
          width="900"
          height="300"
          image= {info.humidity > 85 ? RainUrl : info.temp > 5 ? HotUrl : ColdUrl}
        /><br/>
          <Typography gutterBottom variant="h5" component="div">
            <b>{info.city}</b> {info.humidity > 85 ? <ThunderstormIcon/> : info.temp > 5 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2">
            <p><b>Temp: </b>{info.temp}&deg;C</p>
            <p><b>Feels_like: </b>{info.feels_like}&deg;C</p>
            <p><b>Pressure: </b>{info.pressure}</p>
            <p><b>Humidity: </b>{info.humidity}</p>
            <p><b>Weather description: </b>{info.weather} </p>
            <p><b>Wind_speed : </b>{info.Wind_speed}</p>
          </Typography>
    </Card>
    </div>
    )
}