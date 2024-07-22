import React, { useState } from 'react'
import  TextField  from '@mui/material/TextField'
import  Button  from '@mui/material/Button'
function Searchbox({updateInfo}) {
    let [city,setcity] = useState("");
    let [error,setError] = useState(false);
    const  api_url = "https://api.openweathermap.org/data/2.5/weather";
    const api_key = "0aa9d61797603d615c04db195b15c122"

    
    let getweatherinfo = async ()=>{
      try{
       let response =  await fetch(`${api_url}?q=${city}&appid=${api_key}`)
         let jsonresponse  = await response.json();
         console.log(jsonresponse)
         let result = {
            city:city,
            temp:jsonresponse.main.temp,
            tempMin:jsonresponse.main.temp_min,
            tempMax : jsonresponse.main.temp_max,
            humidity : jsonresponse.main.humidity,
            feelsLikes : jsonresponse.main.feels_like,
            weather : jsonresponse.weather[0].description,
         }
         console.log(result)
         return  result;


        }catch(err){
          throw err;
        }
    } ;
  




    
    let handleChange = (event)=>{
        
        setcity(event.target.value)
    }
    let handleSubmit = async(event)=>{
      try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo = await getweatherinfo();
        updateInfo(newinfo)
      } catch(err){
        setError(true)
      }
        
    }
  return (
    <div>
        <h2 style={{color:"black"}}>search for the weather</h2>
        <form onSubmit={handleSubmit} >
         <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/>
         <br />
         <br />
         <Button variant='contained'type='submit'  >search</Button>
         {error && <h2 style={{color:"red"}}>No such palce exist </h2>}
         </form>
    </div>
  )
}

export default Searchbox