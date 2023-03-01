import "./headersection.css";
import { useEffect, useState } from "react";

const HeaderSection = () => {
   const [weather, setWeather] = useState([]);
   const [temperature, setTemperature] = useState([]);
   const [location, setLocation] = useState([]);
   useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
         .then((response) => response.json())
         .then((data) => {
            setWeather(data.weather[0]);
            setTemperature(data.main);
            setLocation(data.name);
        });
     }, []);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const todaysdate = new Date();
  let currentday = weekday[todaysdate.getDay()];
  let currentdate = todaysdate.getDate();
  let currentmonth = month[todaysdate.getMonth()];
  let currenttemp = Math.round(temperature.temp); 
  return (
    <header>
      <h2>{`${currentday}, ${currentdate} ${currentmonth}`}</h2>
      <p>{`${weather.description}`}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt=''/>
      <p>{`${currenttemp} degrees celcius`}</p>
      <p>{`${location}`}</p>
    </header>
  );
};

export default HeaderSection;
