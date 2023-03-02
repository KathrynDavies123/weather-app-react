import "./forecasttile.css";

const ForecastTile = (props) => {
  return (
    <div className="forecast-tile container">
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt=""
      />
      <p className="forecast-temp">{props.temp}</p>
      <p className="forecast-time">{props.time}</p>
    </div>
  );
};

export default ForecastTile;
