import {useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./normalize.css";
import "./base.css";

const Home = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div className="homepage-wrapper">
      <Sidebar />
      <Header />
      <Main showBox={showBox} setShowBox={setShowBox} />
    </div>
  );
};

export default Home;
