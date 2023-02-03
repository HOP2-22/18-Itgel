import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { AuthContext } from "../App";

const History = () => {
  const [urls, setUrls] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const datas = async () => {
      if (!currentUser) return;
      try {
        const { data } = await axios.post(`http://localhost:9000/URL/history`, {
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
      </div>

      <div
        style={{
          marginTop: "64px",
        }}
      >
        {urls?.map((url) => (
          <div key={url._id}>
            {url.long} {url.short}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default History;
