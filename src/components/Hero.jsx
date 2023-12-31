import "../styles/Hero.css";
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="./images/photo-grid.png"
        alt="pictures"
        className="hero--img"
      />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
