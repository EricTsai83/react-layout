import {useState} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./normalize.css";
import "./base.css";

const Home = () => {
  const [showBox, setShowBox] = useState(false);
  return (
    <div>
      <Header />
      <Main showBoxAttr={showBox} showBoxStatus={setShowBox} />
    </div>
  );
};

export default Home;
