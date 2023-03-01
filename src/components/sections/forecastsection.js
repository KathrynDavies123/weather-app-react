import "./forecastsection.css";
import ForecastTile from "../tiles/forecasttile";
import { useEffect, useState } from "react";
import Moment from "react-moment";

const ForecastSection = () => {
  const [forecastday, setForecastday] = useState([]);
  const [forecastweek, setForecastweek] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=52.468868477131615&lon=13.3898461&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastday(data.list.slice(0, 9));
        setForecastweek(data.list);
      });
  }, []);

  function getEveryNth(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % 8 === 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  let weeklyforecast = getEveryNth(forecastweek);

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
      {timeframe === "Today" &&
        forecastday.map((item, index) => (
          <ForecastTile
            key={`ForecastTile ${index}`}
            time={
              <Moment unix format="HH">
                {item.dt}
              </Moment>
            }
            temp={`${Math.round(item.main.temp)} degrees celcius`}
            icon={item.weather[0].icon}
          />
        ))}
        {timeframe === "Week" && 
        weeklyforecast.map((item, index) => (
            <ForecastTile 
            key={`ForecastTile ${index}`}
            time={
              <Moment unix format="ddd">
                {item.dt}
              </Moment>
            }
            temp={`${Math.round(item.main.temp)} degrees celcius`}
            icon={item.weather[0].icon}/>
        ))}
    </div>
  );
};

export default ForecastSection;
