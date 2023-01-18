import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import "../styles/App.css";

function Header() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, "current user header");
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu"
        rel="stylesheet"
      ></link>
      <div
        style={{
          display: "flex",
          border: "none",
          justifyContent: "right",
          padding: 10,
          paddingRight: 30,
          gap: 10,
        }}
      >
        <p className="sb" style={{ color: "green" }}>
          Хэрхэн ажилладаг вэ?
        </p>
        {currentUser ? (
          <p>{currentUser}</p>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "5px 10px",
                width: "383px",
                height: "43px",
                background: "#02b589",
                borderRadius: "100px",
                border: "none",
              }}
            >
              <p className="ehv">Нэвтрэх</p>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
