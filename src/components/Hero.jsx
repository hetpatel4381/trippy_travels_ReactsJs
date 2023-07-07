import "./HeroStyles.css";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          alt="HeroImg"
          src="https://images.unsplash.com/photo-1687991242328-d4220043d1d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </div>

      <div className="hero-text">
        <h1>Your Journey Your Story</h1>
        <p>Choose Your Favourite Destination.</p>
      </div>
    </>
  );
};

export default Hero;
