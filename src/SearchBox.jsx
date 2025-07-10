import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState} from "react";


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    
    const api_url="https://api.openweathermap.org/data/2.5/weather";
    const api_key="d247415b2cc4f9e532511be8b6152cd3";

    let getWeatherInfo=async(info)=>{
       try
        {
            let response=await fetch(`${api_url}?q=${city}&appid=${api_key}&units=metric`);
            let jsonResponse=await response.json();
            //console.log(jsonResponse); get all the info about the response we get and print result by using the ans fron that response
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,

            }
            console.log(result);
            return result;
        }catch(error){
           throw error;
        }

        
    };

    let handleChange=(event)=>{
        setCity(event.target.value);//as we enter the val in the search box.. we are setting the value of the city using setCity 

    };

    let handleSubmit=async (event)=>{
       try{
        event.preventDefault();// prevents default behavior of clearing everthing after submit is clicked
        console.log(city);
        
        setError(false);
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
       }catch(error){
        setError(true);
      }
       
       

    };
    return (
        <div className="SearchBox">
              <form onSubmit={handleSubmit}>

                <TextField id="city" label="city name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
                <Button variant="contained" color="success" type='submit'>
                Search
                </Button>
                {error && <p style={{ color: "red"}}>No such place exists in our API</p>}

            </form>
        </div>
        
    );

}