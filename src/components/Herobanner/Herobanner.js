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
            WEB DEVELOPMENT ENTHUSIAST
          </h1>
          <p className="welcome__intro">
            A<strong> web development enthusiast</strong> that wants to
            <strong> explore more</strong> of this world and to become
            <strong> a full stack developer.</strong> Passionate about{" "}
            <strong> Learning</strong>.
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
