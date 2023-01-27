import logo from "../assets/logo-default.png";
import "../styles/App.css";
import { useState, useContext } from "react";
import { AuthContext } from "../App";
import Header from "./header";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [short, setShort] = useState();
  const RandomGenerator = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    console.log("generated random number");
  };
  RandomGenerator(5);
  console.log(currentUser, "current user");
  return (
    <div>
      <Header />
      <img className="logo" alt="logo" src={logo} />
      <div className="inputContainer">
        <input
          className="inputText"
          placeholder="https://www.web-huudas.mn"
        ></input>
        <button className="shortenButton" onClick={""}>
          <p className="shortenButtonText">Богиносгох</p>
        </button>
      </div>
    </div>
  );
};
export default Home;
