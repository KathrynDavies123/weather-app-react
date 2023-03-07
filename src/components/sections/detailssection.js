import "./detailssection.css";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import DetailsTile from "../tiles/detailstile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const DetailsSection = () => {
  const [details, setDetails] = useState([]);
  const [sys, setSys] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [wind, setWind] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=50.940063809809125&lon=6.957682440739698&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setSys(data.sys);
        setTemperature(data.main);
        setWind(data.wind);
      });
  }, []);

  let mintemp = Math.round(temperature.temp_min);
  let maxtemp = Math.round(temperature.temp_max);
  let feelslike = Math.round(temperature.feels_like);
  let windspeed = Math.round(wind.speed);
  let visibilitykm = details.visibility / 1000;

  return (
    <div className="details-section">
      <h2>Today's Highlights</h2>
      <div className="details-grid">
        <DetailsTile
          title="Feels Like"
          measurement={`${feelslike} °C`}
          img={<FontAwesomeIcon className="icon" icon={solid("temperature-quarter")}/>}
        />
        <DetailsTile
          title="Min/Max Temp"
          measurement={`${mintemp} °C /`}
          secondary={`${maxtemp} °C`}
          img={<FontAwesomeIcon className="icon" icon={solid("temperature-quarter")}/>}
        />
        <DetailsTile
          title="Wind Speed/Direction"
          measurement={`${windspeed} km/h /`}
          secondary={`${wind.deg} deg`}
          img={<FontAwesomeIcon className="icon" icon={solid("wind")}/>}
        />
        <DetailsTile
          title="Sunrise/Sunset"
          measurement={
            <Moment unix format="LT">
              {sys.sunrise}
            </Moment>
          }
          secondary={
            <Moment unix format="LT">
              {sys.sunset}
            </Moment>
          }
          img={<FontAwesomeIcon  className="icon" icon={solid("sun")}/>}
        />
        <DetailsTile
          title="Humidity"
          measurement={`${temperature.humidity} %`}
          img={<FontAwesomeIcon className="icon" icon={solid("droplet")}/>}
        />
        <DetailsTile title="Visibility" measurement={`${visibilitykm} km`}
        img={<FontAwesomeIcon className="icon" icon={solid("eye")}/>} />
      </div>
    </div>
  );
};

export default DetailsSection;
