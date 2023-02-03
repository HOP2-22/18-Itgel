import React from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <p>footer</p>
      
    </>
  );
}

export default Layout;
