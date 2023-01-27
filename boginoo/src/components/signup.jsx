import React from "react";
import "../styles/App.css";
import logo from "../assets/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkPass, setCheckPass] = useState();
  const navigate = useNavigate();
  const userCreate = async () => {
    if (password === checkPass) {
      console.log("Password matches");
    } else {
      console.log("Password doesn't match");
    }
    console.log(email, password);
    try {
      const response = await axios.post(`http://localhost:9000/auth/register`, {
        email: email,
        password: password,
      });
      navigate("/login");
      console.log(response, "hi");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <p className="loginHerhen">Хэрхэн ажилладаг вэ?</p>
      <Link to="/">
        <img className="loginLogo" src={logo} alt="" />
      </Link>
      <p className="topSignupText">Бүртгүүлэх</p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input
          placeholder="name@mail.domain"
          className="emailInput"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <input
          type="password"
          className="passInput"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="passP2">Нууц үгээ давтна уу?</p>
        <input
          type="password"
          className="passInput2"
          value={checkPass}
          onChange={(event) => setCheckPass(event.target.value)}
        />
        <button
          className="signup"
          onClick={() => {
            userCreate();
          }}
        >
          <p className="signupText">Бүртгүүлэх</p>
        </button>
      </div>
    </div>
  );
};
export default Signup;
