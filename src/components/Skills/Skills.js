import React from "react";
import "./Skills.css";
import css from "../../images/css-3.png";
import html from "../../images/html-5.png";
import js from "../../images/js.png";
import express from "../../images/express.png";
import node from "../../images/node-js.png";
import react from "../../images/structure.png";
import php from "../../images/PHP.png";
import wordpress from "../../images/wordpress.png";
function Skills() {
  return (
    <div>
      <section className="section container">
        <h2 className="skills__heading">Skills</h2>
        <hr className="skills__divider"></hr>
        <div className="skills__part">
          <div className="skill__wrapper">
            <img src={html} alt="html" />
            <h3 className="skill__label">HTML</h3>
          </div>
          <div className="skill__wrapper">
            <img src={css} alt="css" />
            <h3 className="skill__label">CSS</h3>
          </div>
          <div className="skill__wrapper">
            <img src={js} alt="js" />
            <h3 className="skill__label">JAVASCRIPT</h3>
          </div>
          <div className="skill__wrapper">
            <img src={php} alt="java" />
            <h3 className="skill__label">PHP</h3>
          </div>
        </div>
        <div className="skills__part">
          <div className="skill__wrapper">
            <img src={node} alt="node" />
            <h3 className="skill__label">NODE</h3>
          </div>
          <div className="skill__wrapper">
            <img src={react} alt="react" />
            <h3 className="skill__label">REACT</h3>
          </div>

          <div className="skill__wrapper">
            <img src={express} alt="express" />
            <h3 className="skill__label">EXPRESS</h3>
          </div>

          <div className="skill__wrapper">
            <img src={wordpress} alt="wordpress" />
            <h3 className="skill__label">WORDPRESS</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
