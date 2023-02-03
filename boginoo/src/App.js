import "./styles/App.css";
import Login from "./components/login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./components/home";
import Signup from "./components/signup";
import Forgot from "./components/forgotpass";
import History from "./components/history";
import Layout from "./components/layout";

export const AuthContext = createContext();
function AuthProvider(props) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpass" element={<Forgot />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
