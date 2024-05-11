import "./Card.css";
import Defuse from "../assets/Defuse.png";
import Exploding from "../assets/Exploding.png";
import Kitten from "../assets/kitten.png";
import Shuffle from "../assets/Shuffle.png";
const Card = (num) => {
  console.log(num.num);
  if (num.num == 1) {
    return (
      <>
        <div className="card">
          <img src={Defuse} alt="image" />
          <h1 className="cardtitle">Defuse</h1>
        </div>
      </>
    );
  } else if (num.num == 2) {
    return (
      <>
        <div className="card">
          <img src={Exploding} alt="image" />
          <h1 className="cardtitle">Exploding</h1>
        </div>
      </>
    );
  } else if (num.num == 3) {
    return (
      <>
        <div className="card">
          <img src={Kitten} alt="image" />
          <h1 className="cardtitle">Kitten</h1>
        </div>
      </>
    );
  } else if (num.num == 4) {
    return (
      <>
        <div className="card">
          <img src={Shuffle} alt="image" />
          <h1 className="cardtitle">Shuffle</h1>
        </div>
      </>
    );
  }
};

export default Card;
