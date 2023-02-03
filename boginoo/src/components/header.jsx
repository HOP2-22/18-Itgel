import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import "../styles/App.css";

function Header() {
  const { currentUser } = useContext(AuthContext);
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
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/history">
              <button
                style={{
                  padding: "5px 10px",
                  width: "200px",
                  background: "#02b589",
                  borderRadius: "100px",
                  border: "none",
                }}
              >
                <p className="ehv">History</p>
              </button>
            </Link>
            <p>{currentUser}</p>
          </div>
        ) : (
          <Link to="/login">
            <button
              style={{
                padding: "5px 10px",
                width: "200px",
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
