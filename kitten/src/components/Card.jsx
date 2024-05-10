import "./Card.css";
import Defuse from "../assets/Defuse.png";
const Card = () => {
  return (
    <>
        <div className="card">
          <img src={Defuse} alt="image" />
          <h1 className="cardtitle">Defuse</h1>
        </div>
    </>
  );
};

export default Card;
