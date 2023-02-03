import React from "react";
import Header from "./header";
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}

export default Layout;
