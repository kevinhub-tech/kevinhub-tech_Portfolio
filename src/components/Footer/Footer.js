import React from "react";
import "./Footer.css";
import linkedin from "../../images/linkedin-logo.png";
import github from "../../images/github.png";
function Footer() {
  return (
    <div className="footer">
      <footer className="footer__wrapper container">
        <div className="footer__info">
          <h2>Kevinhub-tech</h2>
          <p>
            I am Kevin! A web development enthusiast that wants to explore more
            of this world and become a full stack developer. Passionate about
            Learning.
          </p>
        </div>
        <div className="footer__nav">
          <h2>Important links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#workexperience">Work Experience</a>
            </li>
            <li>
              <a href="#extracurriculum">Extra Curriculum</a>
            </li>
          </ul>
        </div>
        <div className="footer__contactinfo">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <p>+959799120315</p>
            </li>
            <li>
              <p>winkhantpaing32@gmail.com</p>{" "}
            </li>
            <li>
              <p>Yangon, Myanmar</p>
            </li>
          </ul>
        </div>
        <div className="footer__socials">
          <h2>Socials</h2>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/win-khant-paing/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin"></img>
            </a>

            <a
              href="https://github.com/kevinhub-tech"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github"></img>
            </a>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <h4>Designed and Created by Kevin © 2023. All rights reserved.</h4>
      </div>
    </div>
  );
}

export default Footer;
