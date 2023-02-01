import logo from "../assets/logo-default.png";
import "../styles/App.css";
import { useState, useContext } from "react";
import { AuthContext } from "../App";
import Header from "./header";
import axios from "axios";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [shortenedLink, setShortenedLink] = useState("");
  const [URL, setURL] = useState();
  const RandomGenerator = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleInput = async (event) => {
    setURL(event.target.value);
  };

  RandomGenerator(5);
  console.log(currentUser, "current user");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${URL}`
      );
      setShortenedLink(response.data.result.short_link);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Header />
      <img className="logo" alt="logo" src={logo} />
      <div className="inputContainer">
        <input
          className="inputText"
          placeholder="https://www.web-huudas.mn/"
          onChange={handleInput}
        ></input>
        <button
          className="shortenButton"
          onClick={() => {
            fetchData();
          }}
        >
          <p className="shortenButtonText">Богиносгох</p>
        </button>
        <div>{shortenedLink}</div>
      </div>
    </div>
  );
};
export default Home;
