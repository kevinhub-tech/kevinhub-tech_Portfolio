import React from "react";
import aboutme from "../../images/aboutme.JPG";
import github from "../../images/github-sign.png";
import linkedin from "../../images/linkedin-logo.png";
import "./About.css";
const dynamicAge = () => {
  let myBirthYear = 2002;

  let dynamicAge = new Date().getFullYear() - myBirthYear;
  return dynamicAge;
}

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
              I'm Win Khant Paing but you can call me Kevin. I'm a {dynamicAge()} years-old
              student, living in Yangon, passionately following my goals to
              pursue my explicit interest in technology.
              <br />
              <br />
              It has not been long since I am deeply intrigued about technology
              but what has been long for me is that I am curious about the
              fundamental of any instance. And the technology that we are using
              nowadays in applications and software drives me to learn about
              them impulsively.
              <br />
              <br />I am a self-driven and curious person to learn new things
              and pro-active about anything in my life. I enjoy listening to
              other people's idea and collaborate with it to create something
              beautiful with team work.
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
