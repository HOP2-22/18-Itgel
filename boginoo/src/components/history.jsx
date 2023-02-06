import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../App";
import "../styles/App.css";

const History = () => {
  const [urls, setUrls] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const datas = async () => {
      if (!currentUser) return;
      try {
        const { data } = await axios.post(`http://localhost:9000/url/history`, {
          user: currentUser,
        });
        setUrls(data);
      } catch (e) {}
    };
    datas();
  }, [currentUser]);
  console.log(urls);
  return (
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
        <h3 style={{ color: "#02B589" }}>history</h3>
      </div>

      <div
        style={{
          marginTop: "64px",
        }}
      >
        <h3 style={{ color: "#02B589" }}>Long Short</h3>
        {urls?.map((url) => (
          <div key={url._id} className="sbd">
            {url.long} {url.short}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default History;
