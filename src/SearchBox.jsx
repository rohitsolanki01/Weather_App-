import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import "./searchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error , setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "fc8538a260077167e4f0fd4faee2f9db";

  let getWeatherInfo = async() => {
  try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
 
     let result = {
       city:city,
       tepm:jsonResponse.main.temp,
       tempMin:jsonResponse.main.temp_min,
       tempMax:jsonResponse.main.temp_max,
       humodity:jsonResponse.main.humidity,
       feelsLikes:jsonResponse.main.feels_like,
       weather:jsonResponse.weather[0].description
     };
     console.log(result);
     return result;
  }catch{
    throw error;
  }
  };
  let handelChange = (event) => {
    setCity(event.target.value);
  };

  let handelSubmit = async(event) => {
    try{
      event.preventDefault();
    console.log(city);
    setCity("");
let newInfo = await getWeatherInfo();
updateInfo(newInfo);
    }catch{
      setError(true);
    }
  };
  return (
    <>
      <div className="searchBox">
        <h2>Search city for Weather</h2>
        <form action="" onSubmit={handelSubmit}>
          <TextField
            id="city"
            label="City name"
            variant="standard"
            required
            value={city}
            onChange={handelChange}
          
          />
          <br />
          <br />

          <Button
            variant="contained"
            endIcon={<ContentPasteSearchIcon />}
            type="submit"
          >
            search
          </Button>
          <div style={{color:"red"}}>
          {error && <p>No such place find in api</p>}
          </div>
         
        </form>
      </div>
    </>
  );
}
