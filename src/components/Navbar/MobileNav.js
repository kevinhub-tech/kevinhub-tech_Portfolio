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
              href="https://www.canva.com/design/DAF_ZUTiPFE/MaxTWGdwr_XCBBNNnmMyOQ/edit?utm_content=DAF_ZUTiPFE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
