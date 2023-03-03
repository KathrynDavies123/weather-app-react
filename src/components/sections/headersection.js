import "./headersection.css";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const HeaderSection = () => {
  const [weather, setWeather] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [location, setLocation] = useState([]);
  const [description, setDescription] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.weather[0]);
        setTemperature(data.main);
        setLocation(data.name);
        // Capitalizes first letter of weather description
        let firstletter = weather.description.slice(0, 1);
        let restofword = weather.description.slice(1);
        let capitalfirst = firstletter.toUpperCase();
        let weatherdescription = capitalfirst + restofword;
        setDescription(weatherdescription);
      });
  }, [weather.description]);

  const todaysdate = new Date();

  const [time, setTime] = useState([]);

  // Checks time of day and either adds or removes "night" class to the header element as necessary
  useEffect(() => {
    let timeofday = todaysdate.getHours();
    setTime(timeofday);
    if (time <= 7 || time >= 18) {
      document.body.className = "night";
    } else {
      document.body.className = "";
    }
  }, [todaysdate, time]);

  let currenttemp = Math.round(temperature.temp);

  return (
    <header>
      <p className="header-date-time">
        <Moment format="dddd Do MMMM">{todaysdate}</Moment>
      </p>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt=""
        />
      </div>
      <h1 className="header-temp">{`${currenttemp} °C`}</h1>
      <p className="header-desc">{`${description}`}</p>
      <p className="header-location">
        <FontAwesomeIcon icon={solid("location-dot")} /> {`${location}`}
      </p>
      <div className="image-container"></div>
    </header>
  );
};

export default HeaderSection;
