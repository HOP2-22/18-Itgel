import logo from "../assets/logo-default.png";
import "../styles/App.css";
import { useState } from "react";
import Header from "./header";
import axios from "axios";

const Home = () => {
  const [shortenedLink, setShortenedLink] = useState("");
  const [URL, setURL] = useState();

  const handleInput = async (event) => {
    setURL(event.target.value);
  };
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
