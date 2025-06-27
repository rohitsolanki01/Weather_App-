import SearchBox from './SearchBox'
import InfoBox from './InfoBox' 
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLikes: 32.31,
        humodity: 82,
        tempMax: 27.96,
        tempMin: 27.96,
        tepm: 27.96,
        weather: "broken clouds",
    });

let updateInfo = (newinfo) => {
    setWeatherInfo(newinfo);
}

    return(
        <>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </>
    );
}