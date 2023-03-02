import "./detailstile.css";

const DetailsTile = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        {props.measurement} {props.secondary}
      </p>
    </div>
  );
};

export default DetailsTile;
