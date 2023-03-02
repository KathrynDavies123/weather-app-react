import "./forecasttile.css";

const ForecastTile = (props) => {
  return (
    <div className="forecast-tile">
      <p>
        {props.time}
      </p>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt=""
      />
      <p>{props.temp}</p>
    </div>
  );
};

export default ForecastTile;
