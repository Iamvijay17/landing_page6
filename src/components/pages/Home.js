import React from "react";
import Navbar from "./Navbar";

export const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />
      <div className="text-center">
        <hr />
        <h2>{user && user.displayName}</h2>
        {user && (
          <img
            src={user.photoURL}
            style={{ borderRadius: "50%" }}
            alt="profile"
          />
        )}
        <hr />
      </div>
    </div>
  );
};
