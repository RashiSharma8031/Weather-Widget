import React, { useState } from 'react'
import InfoBox from './InfoBox'
import Searchbox from './Searchbox'
function WeatherApp() {
    const [weather,setweather] = useState({
        
            city:"Delhi",
            feelslike:25.03,
            tempMin:25.56,
            tempMax:25.67,
            humidity:47,
            weather:"haze",
          
    })

    let updateInfo = (newinfo)=>{
         setweather(newinfo);
    }
  return (
    <div style={{textAlign:"center",margin:"10px"}}>
        <h2 style={{color:"black"}}>Weather App by DELTA</h2>
    <Searchbox updateInfo={updateInfo}/>
    <InfoBox info = {weather}/>
    </div>
  )
}

export default WeatherApp