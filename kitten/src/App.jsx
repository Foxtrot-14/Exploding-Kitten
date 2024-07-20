import "./App.css";
import Auth from "./components/pages/Auth";
import Home from "./components/pages/Home";
import Lead from "./components/pages/Lead";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="back">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/leaderboard" element={<Lead />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
