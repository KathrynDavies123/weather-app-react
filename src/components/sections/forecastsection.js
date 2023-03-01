import "./forecastsection.css";
import ForecastTile from "../tiles/forecasttile";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import "moment-timezone";

const ForecastSection = () => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=52.468868477131615&lon=13.3898461&cnt=9&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecast(data.list);
      });
  }, []);
  const [timeframe, setTimeframe] = useState("Today");

  const toggleWeek = () => {
    if (timeframe !== "Week") {
      setTimeframe("Week");
    }
  };

  const toggleToday = () => {
    if (timeframe !== "Today") {
      setTimeframe("Today");
    }
  };

  return (
    <div>
      <input
        type="radio"
        name="timeframe-change"
        id="radio-week"
        onClick={toggleWeek}
      />
      <label htmlFor="radio-week">Week</label>
      <input
        type="radio"
        name="timeframe-change"
        id="radio-today"
        onClick={toggleToday}
      />
      <label htmlFor="radio-today">Today</label>
      {timeframe === "Today" && forecast.map((item, index) => (
        <ForecastTile key={`ForecastTile ${index}`} time={<Moment unix format="HH">{item.dt}</Moment>} temp={`${Math.round(item.main.temp)} degrees celcius`} icon={item.weather[0].icon}/>
      ))} 
    </div>
  );
};

export default ForecastSection;
