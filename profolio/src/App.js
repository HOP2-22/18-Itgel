import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyProfolio from "./pages/MyProfolio";
import PopularPost from "./pages/PopularPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/MyProfolio" element={<MyProfolio />} exact />
        <Route path="/PopularPost" element={<PopularPost />} exact />
      </Routes>
    </Router>
  );
}

export default App;
