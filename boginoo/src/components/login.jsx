import React from "react";
import "../styles/App.css";
import logo from "../assets/logo2.png";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../App";
import Header from "./header";

const Login = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:9000/auth/login", {
        email: "shjfbvh@gmail.com",
        password: "9009",
      });
      setCurrentUser(response.data.email);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Header />
      <p className="topLoginText">Нэвтрэх</p>
      <div>
        <p className="emailP">Цахим хаяг</p>
        <input placeholder="name@mail.domain" className="emailInput"></input>
      </div>
      <div>
        <p className="passP">Нууц үг</p>
        <input type="password" className="passInput" />
      </div>
      <div>
        <input type="checkbox" className="rememberCheck" />
        <p className="rememberP">Намайг сана</p>
        <Link to="/forgotpass">
          <button className="forgotPassTextOnLogin">Нууц үгээ мартсан</button>
        </Link>
      </div>
      <button className="loginButtonOnLogin" onClick={handleLogin}>
        <p className="loginButtonOnLoginText">Нэвтрэх</p>
      </button>
      <Link to="/signup">
        <button className="signupOnLogin">
          <p>Шинэ хэрэглэгч бол энд дарна уу?</p>
        </button>
      </Link>
    </div>
  );
};
export default Login;
