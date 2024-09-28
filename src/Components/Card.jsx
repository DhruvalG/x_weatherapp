import "../CSS/styles.css";
const Card = ({ title, value }) => {
    return (
      <div className="weather-card">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    );
};
export default Card;