import "./forecastsection.css";
import ForecastTile from "../tiles/forecasttile";
import { useEffect, useState } from "react";
import Moment from "react-moment";

const ForecastSection = () => {
  // Separate so that the user can toggle between a day and week view
  const [forecastday, setForecastday] = useState([]);
  const [forecastweek, setForecastweek] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=50.940063809809125&lon=6.957682440739698&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        // Gets the first 8 entries in the fetched array (timeframe is 24 hours from now)
        setForecastday(data.list.slice(0, 9));
        // Gets all entries (default)
        setForecastweek(data.list);
      });
  }, []);

  // Gets every eighth entry in the fetched array (every 24 hours is 8 entries, and we only want one per day)

  function getEveryEighth(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (i % 8 === 0) {
        result.push(arr[i]);
      }
    }

    return result;
  }

  let weeklyforecast = getEveryEighth(forecastweek);

  // Sets the timeframe that the user selects day/week, default is day, radio buttons change the selection onclick

  const [timeframe, setTimeframe] = useState("Today");

  return (
    <div className="forecast-section">
      <fieldset>
        <legend>Select Timeframe</legend>
        <input
          type="radio"
          name="timeframe-change"
          id="radio-week"
          onClick={() => setTimeframe("Week")}
        />
        <label htmlFor="radio-week">Week</label>
        <input
          type="radio"
          name="timeframe-change"
          id="radio-today"
          defaultChecked
          onClick={() => setTimeframe("Today")}
        />
        <label htmlFor="radio-today">Today</label>
        </fieldset>
      {/* Renders a different view depending on whether day or week view is selected */}
      <div className="forecast-scroll">
        {timeframe === "Today" &&
          forecastday.map((item, index) => (
            <ForecastTile
              key={`ForecastTile ${index}`}
              time={
                <Moment unix format="HH:mm">
                  {item.dt}
                </Moment>
              }
              temp={`${Math.round(item.main.temp)} ??C`}
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
              temp={`${Math.round(item.main.temp)} ??C`}
              icon={item.weather[0].icon}
            />
          ))}
      </div>
    </div>
  );
};

export default ForecastSection;
