import React from "react";
import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <nav className="menu-bar">
        <p className="menu-icon">
          <span>K</span>evinhub
        </p>

        <ul className="menu__container">
          <li>
            <a className="menu__link" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="menu__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="menu__link" href="#contact">
              Contact Me
            </a>
          </li>
          <li>
            <a className="menu__link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="menu__link" href="#workexperience">
              Work Experience
            </a>
          </li>
          <li>
            <a className="menu__link" href="#extracurriculum">
              Extra Curriculum
            </a>
          </li>
        </ul>
        <button>
          <a
            className="menu__resume btn"
            href="https://docs.google.com/document/d/1hlpPyILQUgBuseIIdyXq3ixxWrNgA4xU/edit?usp=sharing&ouid=102153107342853816794&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>
        <button className="menu__bar" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
      <MobileNav clicked={showMenu} unclicked={setShowMenu} />
    </header>
  );
}

export default Navbar;
