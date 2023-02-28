import "./headersection.css";
import { useEffect, useState } from "react";

const HeaderSection = () => {
   const [weather, setWeather] = useState([]);
   useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
         .then((response) => response.json())
         .then((data) => setWeather(data.weather[0]));
     }, []);
     const [temperature, setTemperature] = useState([]);
   useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
         .then((response) => response.json())
         .then((data) => setTemperature(data.main));
     }, []);
     const [location, setLocation] = useState([]);
   useEffect(() => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
         .then((response) => response.json())
         .then((data) => setLocation(data.name));
     }, []);
     //these useeffects can surely be combined into one? will try later 
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
  let currenttemp = temperature.temp;
  //toFixed() doesn't work on page reload, have to put it somehow in the useeffect 
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
