import "./headersection.css";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

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
      <h1><Moment format="dddd Do MMMM">{todaysdate}</Moment></h1>
      <img
        src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt=""
      />
      <p className="header-temp">{`${currenttemp} °C`}</p>
      <p className="header-desc">{`${weather.description}`}</p>
      <p className="header-location"><FontAwesomeIcon icon={solid('location-dot')} /> {`${location}`}</p>
    </header>
  );
};

export default HeaderSection;
