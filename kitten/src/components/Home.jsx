import { useState } from "react";
import "./Home.css";
import deck from "../assets/deck.png";
import maincat from "../assets/cat.png";
import Card from "../components/Card";
import playIcon from "../assets/play.png";
import stopIcon from "../assets/stop.png";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [play, setPlay] = useState(false);

  const handlePlayClick = () => {
    setPlay(true);
  };

  const handleDeckClick = () => {
    if (play) {
      setCards([...cards, <Card key={cards.length} />]);
    }
  };

  return (
    <div className="page">
      <div className="hero">
        <div className="logo">
          <img src={maincat} alt="logo" />
        </div>
        <div className="main">
          {cards.map((card, index) => (
            <div key={index} className="stacked-card">
              {card}
            </div>
          ))}
        </div>
        {play && (
          <div className="box deck" onClick={handleDeckClick}>
            <img src={deck} alt="Deck" />
          </div>
        )}
        <div className="box log">LogIn/SingUp</div>
        <div className="box start" onClick={handlePlayClick}>
          <img src={playIcon} alt="Play" />
          <img src={stopIcon} alt="Stop" />
        </div>
        <div className="box pro">Profile/Leader board</div>
      </div>
    </div>
  );
};

export default Home;
