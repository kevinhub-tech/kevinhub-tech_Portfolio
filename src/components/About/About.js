import React from "react";
import aboutme from "../../images/aboutme.jpg";
import github from "../../images/github-sign.png";
import linkedin from "../../images/linkedin-logo.png";
// import dynamicAge from "../../helper/dynamicAge";
import "./About.css";


function About() {
  return (
    <div>
      <section className="about section container" id="about">
        <div className="aboutme__section">
          <div>
            <img className="aboutme__img" src={aboutme} alt="Kevin" />
          </div>
          <div>
            <h2 className="aboutme__heading">About me</h2>
            <hr className="aboutme__line"></hr>
            <p className="aboutme__desc">
              Full-stack developer with 3.5+ years of experience, evolving from WordPress builds to full-stack engineering, and eventually leading end-to-end project delivery as a Lead Web Developer, managing teams across multiple client engagements in React, Node.js, PHP, and Shopify.
              <br />
              <br />
              What drives me isn't just shipping features, it's understanding how things actually work underneath them. I care about the fundamentals: how a database is structured, why a system is architected a certain way, what happens when something breaks and why. That curiosity is what's pushing me to keep sharpening my technical depth, even after years of professional work.
              <br />
              <br />
              I'm self-driven, I like collaborating with people who bring different perspectives, and I genuinely enjoy the process of building something well, not just building it fast.
            </p>
            <div className="aboutme__socials__formob">
              <a
                href="https://github.com/kevinhub-tech"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="aboutme__socials"
                  src={github}
                  alt="github logo"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/win-khant-paing/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="aboutme__socials"
                  src={linkedin}
                  alt="linkedin logo"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
