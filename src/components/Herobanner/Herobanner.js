import React from "react";
import herobanner from "../../images/herobanner.png";
import "./Herobanner.css";

function HeroBanner() {
  return (
    <div>
      <section className="hero container" id="home">
        <div className="welcome__context">
          <img
            className="herobannermobimg"
            src={herobanner}
            alt="aesthetic computer"
          />
          <h2 className="welcome__title">Hello I'm Kevin!👋</h2>
          <h1 className="welcome__subtitle">
            FULL STACK <br />
            WEB DEVELOPER
          </h1>
          <p className="welcome__intro">
            Full-stack developer with <strong> 3.5+ years of experience </strong> building client websites and web applications across <strong> WordPress, Shopify, and React/Node.js. </strong> 
          </p>
          <a className="welcome__btn btn" href="#contact">
            Contact me!
          </a>
        </div>
        <div className="banner__img">
          <img
            className="herobannerimg"
            src={herobanner}
            alt="aesthetic computer"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroBanner;
