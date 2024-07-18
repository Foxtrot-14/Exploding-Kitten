import { useState } from "react";
import "./Home.css";
import deck from "../assets/deck.png";
import maincat from "../assets/cat.png";
import log from "../assets/log.png";
import Card from "../components/Card";
import playIcon from "../assets/play.png";
import stopIcon from "../assets/stop.png";
import lead from "../assets/lead.png";
import Instruction from "./Instruction";
import Prompt from "./Prompt";
const Home = () => {
  const [cards, setCards] = useState([]);
  const [play, setPlay] = useState(false);
  const [cardIndex, setCardIndex] = useState([]);
  const [count, setCardCount] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);
  function selectRandomly(arr) {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * 4);
      result.push(arr[randomIndex]);
    }
    return result;
  }
  const handlePlayClick = () => {
    setPlay(true);
    setShowInstruction(false);
    const originalArray = [1, 2, 3, 4];
    const newArray = selectRandomly(originalArray);
    setCardIndex(newArray);
  };
  const handleStopClick = () => {
    setPlay(false);
    setCards([]);
    setCardCount(0);
  };

  const handleDeckClick = () => {
    if (play && count <= 4) {
      setCards([...cards, <Card key={cards.length} num={cardIndex[count]} />]);
      setCardCount(count + 1);
    }
  };

  return (
    <div className="page">
      <div className="hero">
        <Prompt text="Welcome"/>
        <div className="logo">
          <img src={maincat} alt="logo" />
        </div>
        <div className="main">
          <h1 className="heading">Exploding Kitten</h1>
          {showInstruction && <Instruction />}
          <div className="gr">
            {cards.map((card, index) => (
              <div key={index} className="stacked-card">
                {card}
              </div>
            ))}
          </div>
        </div>
        {play && (
          <div className="box deck" onClick={handleDeckClick}>
            <img src={deck} alt="Deck" />
          </div>
        )}
        <div className="box log">
          <img src={log} alt="" />
        </div>
        <div className="box start">
          <img src={playIcon} onClick={handlePlayClick} alt="Play" />
          <img src={stopIcon} onClick={handleStopClick} alt="Stop" />
        </div>
        <div className="box pro">
          <img src={lead} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
