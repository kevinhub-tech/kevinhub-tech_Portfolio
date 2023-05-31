import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import "./Projects.css";
function Projects() {
  return (
    <div className="project" id="projects">
      <h2 className="projects__heading section container">Projects</h2>
      <section className="projects container">
        <div className="project__wrapper">
          <img
            className="project__img"
            src={project1}
            alt="todolist project"
          ></img>
          <h3 className="project__title">To do List Project</h3>
          <div className="project__skill">
            <p className="project__element">react</p>
            <p className="project__element">node</p>
            <p className="project__element">express</p>
            <p className="project__element">mongodb</p>
          </div>
          <p className="project__desc">To Do List App with MERN STACK</p>
          <br />
          <br />
          <a
            className="project__link"
            href="https://github.com/kevinhub-tech/todolist"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
        <div className="project__wrapper">
          <img className="project__img" src={project2} alt="API project"></img>
          <h3 className="project__title">
            Know-Your-Neighbourhood (Store Project)
          </h3>
          <div className="project__skill">
            <p className="project__element">react js</p>
            <p className="project__element">spring boot</p>
            <p className="project__element">mysql</p>
            <p className="project__element">O auth</p>
          </div>
          <p className="project__desc">
            A website that shows store around you with REST API and
            Authentication to view the stores
          </p>
          <br />
          <a
            className="project__link"
            href="https://github.com/kevinhub-tech/API"
            target="_blank"
            rel="noreferrer"
          >
            View Code
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
