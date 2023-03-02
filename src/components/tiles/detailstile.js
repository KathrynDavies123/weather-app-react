import "./detailstile.css";

const DetailsTile = (props) => {
  return (
    <div className="details-tile">
      <h3>{props.title}</h3>
      <div>
        {props.img}
      <p>
        {props.measurement} {props.secondary}
      </p>
    </div></div>
  );
};

export default DetailsTile;
