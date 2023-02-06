import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

const Home = () => {
  const navigate = useNavigate();
  const [long, setLong] = useState("");
  const [short, setShort] = useState("");
  const [original, setOriginal] = useState("");
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const createLink = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:9000/url/create", {
        long,
        user: currentUser,
      });
      setOriginal(data.data.long);
      setShort(data.data.short);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginTop: "56px",
          marginRight: "78px",
        }}
      >
        <div></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "300px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}></div>
        <div
          style={{
            color: "#02B589",
            fontSize: "50px",
            fontweight: "400",
            fontFamily: "Lobster",
            marginTop: "10px",
          }}
        >
          Boginoo
        </div>

        <div
          style={{
            marginTop: "64px",
          }}
        >
          <input
            placeholder="https://www.web-huudas.mn"
            style={{
              width: "581px",
              height: "44px",
              fontSize: "20px",
              borderRadius: "50px",
              paddingLeft: "30px",
              fontFamily: "Ubuntu",
              border: "1px solid white",
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
            }}
            onChange={(event) => {
              setLong(event.target.value);
            }}
          />
          <button
            disabled={loading}
            style={{
              backgroundColor: "#02B589",
              borderRadius: "50px",
              border: "none",
              color: "white",
              width: "192px",
              height: "48px",
              marginLeft: "20px",
              fontSize: "20px",
              fontWeight: "700",
            }}
            onClick={createLink}
          >
            Богиносгох
          </button>
          <div
            style={{
              display: !loading ? "block" : "none",
            }}
          >
            <div>Өгөгдсөн холбоос:</div>
            <div>{original}</div>
            <div>Богино холбоос:</div>
            <div
              onClick={() => {
                navigate(short);
              }}
              style={{ cursor: "pointer" }}
            >
              localhost:9000/{short}
            </div>
          </div>
          <div
            style={{
              display: short ? "block" : "none",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
