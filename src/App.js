// import React from "react";
// import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
// import Home from "./components/Home";
import "./styles/App.css";
// import Contact from "./components/Contact";
// import Services from "./components/Services";
// import Products from "./components/Products";
// import LogIn from "./components/LogIn";
// function App() {
//   return (
//     <div class="con">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">{seconds}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
