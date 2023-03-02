import './detailssection.css';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import DetailsTile from '../tiles/detailstile';

const DetailsSection = () => {
    const [details, setDetails] = useState([]);
    const [sys, setSys] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [wind, setWind] = useState([]);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then((response) => response.json())
         .then((data) => {
            setDetails(data);
            setSys(data.sys);
            setTemperature(data.main);
            setWind(data.wind);
         })
    }, []);

    let mintemp = Math.round(temperature.temp_min);
    let maxtemp = Math.round(temperature.temp_max);
    let feelslike = Math.round(temperature.feels_like);
    let windspeed = Math.round(wind.speed);
    let visibilitykm = (details.visibility) / 1000;

    return ( <div>
        <h2>Today's Highlights</h2>
        <div>
            <DetailsTile title="Feels Like" measurement={`${feelslike} degrees celcius`}/>
            <DetailsTile title="Min/Max Temp" measurement={`${mintemp} degrees celcius`} secondary={`${maxtemp} degrees celcius`}/>
            <DetailsTile title="Wind Speed/Direction" measurement={`${windspeed} km/h`} secondary={`${wind.deg} deg`}/>
            <DetailsTile title="Sunrise/Sunset" measurement={<Moment unix format="LT">{sys.sunrise}</Moment>}
            secondary={<Moment unix format="LT">{sys.sunset}</Moment>}/>
            <DetailsTile title="Humidity" measurement={`${temperature.humidity} %`}/>
            <DetailsTile title="Visibility" measurement={`${visibilitykm} km`}/>
        </div>
    </div> );
}
 
export default DetailsSection;