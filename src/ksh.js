import "./App.css";
import React, { useState } from "react";
import users from "./components/l.json";

const InputBar = () => {
  return <input placeholder="Lookup"></input>;
};
const UserCard = ({ userData }) => {
  return (
    <div>
      <div className="App">
        <img
          src={userData.avatar}
          width={150}
          height={150}
          alt={userData.username}
        ></img>
        <p>{userData.first_name + " " + userData.last_name}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
        <p>{userData.gender}</p>
      </div>
    </div>
  );
};
const App = () => {
  console.log(users);
  const [output, setOutput] = useState(users);
  const Search = (val) => {
    setOutput(() => {
      return users.filter((user) => {
        return user.username.toLowerCase().includes(val.toLowerCase());
      });
    });
  };
  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => {
          Search(e.target.value);
        }}
      />
      {output.map((userData, index) => {
        return <UserCard userData={userData} key={index} />;
      })}
    </div>
  );
};

export default App;
