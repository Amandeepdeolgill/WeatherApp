import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";
export default function InfoBox({info}) {
  let ColdUrl = "https://images.unsplash.com/photo-1484313544071-4d67c88b99be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdpbnRlcnxlbnwwfHwwfHx8MA%3D%3D";
  let RainUrl = "https://media.istockphoto.com/id/1474099444/photo/landscape.jpg?s=1024x1024&w=is&k=20&c=eiEm06C8NEDRUWXRvfulCqisDIcJ8Ly6KKiT5V-jfL4=";
  let HotUrl = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="InfoBox">
            <Card md={{ maxWidth: 700 }}>
        <CardMedia
          component="img"
          width="900"
          height="300"
          image= {info.humidity > 85 ? RainUrl : info.temp > 5 ? HotUrl : ColdUrl}
        />
          <Typography gutterBottom variant="h5" component="div">
            <b>{info.city}</b> {info.humidity > 85 ? <ThunderstormIcon/> : info.temp > 5 ? <WbSunnyIcon/> : <AcUnitIcon/>}
          </Typography>
          <Typography variant="body2" color="text.primary">
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