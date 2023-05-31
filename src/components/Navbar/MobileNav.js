import React from "react";
import "./MobileNav.css";
import close from "../../images/close.png";
function MobileNav({ clicked, unclicked }) {
  return (
    <div
      className="mobile__nav"
      style={{
        display: clicked ? "flex" : "none",
      }}
    >
      <nav>
        <ul className="mobile-nav__menu">
          <li>
            <a
              className="mobile-nav__link"
              onClick={() => unclicked(!clicked)}
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="mobile-nav__link"
              onClick={() => unclicked(!clicked)}
              href="#contact"
            >
              Contact Me
            </a>
          </li>
          <li>
            <a
              className="mobile-nav__link"
              href="#projects"
              onClick={() => unclicked(!clicked)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="mobile-nav__link"
              onClick={() => unclicked(!clicked)}
              href="#workexperience"
            >
              Work Experience
            </a>
          </li>
          <li>
            <a
              className="mobile-nav__link"
              onClick={() => unclicked(!clicked)}
              href="#extracurriculum"
            >
              Extra Curriculum
            </a>
          </li>
          <li>
            <a
              className="mobile-nav__btn btn"
              href="https://docs.google.com/document/d/1hlpPyILQUgBuseIIdyXq3ixxWrNgA4xU/edit?usp=sharing&ouid=102153107342853816794&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <button className="close__btn" onClick={() => unclicked(!clicked)}>
              <img src={close} alt="close bar" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
