import React from "react";
import "./App.css";
import Profile from "./profile/Profile";

const App = () => {
  const person = {
    fullname: "Lady Diana",
    bio: "  Born in 1 juillet 1961 ",
    profession: " Princess",
  };
  return (
    <div
      style={{
        boxShadow: "5px 10px #888888",
        margin: "50px ",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Profile person={person}>
        <img
          src={
            "https://fr.web.img6.acsta.net/pictures/210/233/21023376_20130730121416649.jpg"
          }
          alt="childphoto"
        />
      </Profile>
    </div>
  );
};

export default App;
