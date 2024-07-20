import { useState, useEffect } from "react";
import "./Home.css";
import deck from "../../assets/deck.png";
import maincat from "../../assets/cat.png";
import log from "../../assets/log.png";
import Card from "../Card";
import playIcon from "../../assets/play.png";
import stopIcon from "../../assets/stop.png";
import lead from "../../assets/lead.png";
import Instruction from "../Instruction";
import Prompt from "../Prompt";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [play, setPlay] = useState(false);
  const [cardIndex, setCardIndex] = useState([]);
  const [count, setCardCount] = useState(0);
  const [showInstruction, setShowInstruction] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [prompt, setPrompt] = useState("Welcome");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function selectRandomly(arr) {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.push(arr[randomIndex]);
    }
    return result;
  }
  function checkOneBeforeTwo(arr) {
    let count1 = 0;
    let count2 = 0;
    for (let num of arr) {
      if (num.props.num === 1) {
        count1++;
      } else if (num.props.num === 2) {
        count2++;
      }
    }
    return count1 >= count2;
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

  useEffect(() => {
    if (cards.length > 0) {
      const lastCard = cards[cards.length - 1];
      if (lastCard.props.num === 4) {
        //restart the game
        handleStartOver();
      } else if (lastCard.props.num === 2) {
        //check if there is a defuse card
        if (!checkOneBeforeTwo(cards)) {
          handleGameOver();
        } else if (checkOneBeforeTwo(cards) && cards.length === 5) {
          //if the last card is an exploding kitten and we have a defuse card in the deck
          handleGameWon();
        }
      } else if (cards.length === 5) {
        handleGameWon();
      }
    }
  }, [cards]);

  const handleStartOver = () => {
    setPrompt("Start Over");
    setTimeout(() => {
      setIsLoading(true);
      handleStopClick();
    }, 500);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const handleGameOver = () => {
    setPrompt("Game Over");
    setTimeout(() => {
      setIsLoading(true);
      handleStopClick();
    }, 500);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  const handleGameWon = () => {
    setPrompt("You Win!!!");
    setTimeout(() => {
      setIsLoading(true);
      handleStopClick();
    }, 500);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div className="page">
      {isLoading && (
        <div className="blur">
          <Prompt text={prompt} />
        </div>
      )}
      <div className="hero">
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
          {play && <img src={stopIcon} onClick={handleStopClick} alt="Stop" />}
        </div>
        <div className="box pro">
          <img src={lead} alt="leader" />
        </div>
      </div>
    </div>
  );
};

export default Home;
