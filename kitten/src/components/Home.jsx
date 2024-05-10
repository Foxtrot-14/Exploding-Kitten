import "./Home.css";
import maincat from "../assets/cat.png"
const Home = () => {
  return (
    <div className="page">
      <div className="hero">
        <div className="logo">
          <img src={maincat} alt="logo" />
        </div>
        <div className="box main">Main</div>
        <div className="box deck">Deck</div>
        <div className="box log">LogIn/SingUp</div>
        <div className="box start">Start/Stop</div>
        <div className="box pro">Profile/Leader board</div>
      </div>
    </div>
  );
};

export default Home;
