import "./headersection.css";
import { useEffect, useState } from "react";
import Moment from "react-moment";

const HeaderSection = () => {
  const [weather, setWeather] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.weather[0]);
        setTemperature(data.main);
        setLocation(data.name);
      });
  }, []);

  const todaysdate = new Date();
  let currenttemp = Math.round(temperature.temp);

  return (
    <header>
      <Moment format="dddd Do MMMM">{todaysdate}</Moment>
      <p>{`${weather.description}`}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt=""
      />
      <p>{`${currenttemp} degrees celcius`}</p>
      <p>{`${location}`}</p>
    </header>
  );
};

export default HeaderSection;
