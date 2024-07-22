import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './info.css'

 export default function InfoBox({info}) {
    const cold_Img  = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const hot_img = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_img= "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    
  return (
    <div>

      
        <div className='container'>
        <Card sx={{ maxWidth: 345 }} style={{background:"rgb(224, 217, 217)"}}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp >30 ? hot_img: info.temp<10? cold_Img:rain_img}
        title={info.city}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{ info.humidity > 80? <WbSunnyIcon/> : info.tempMax > 15 ? <ThunderstormIcon/> : <AcUnitIcon/>
          
        }
          
          
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          <p>temperature = {info.tempMax}&deg;C</p>
          <p>humidity= {info.humidity}</p>
          <p>temperature max= {info.tempMin}&deg;C</p>
          <p>
            weather can can be describe as {info.feelslike} and feels like {info.weather}
          </p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}
