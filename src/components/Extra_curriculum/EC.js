import React from "react";
import "./EC.css";
import startup from "../../images/startup.png";
import wit from "../../images/wit.png";
function EC() {
  return (
    <div>
      <section
        className="extracurriculum section container"
        id="extracurriculum"
      >
        <h2 className="extracurriculum__heading">Extra Curriculum</h2>
        <hr className="extracurriculum__divider"></hr>
        <div className="extracurriculum__wrapper">
          <div>
            <h3 className="extracurriculum__title">
              Phandeeyar Start-Up Challenge
            </h3>
            <small className="extracurriculum__duration">2019</small>
            <p className="extracurriculum__desc">
              An organization called <strong> Phandeeyar </strong> had held a
              competition, targetting to the youngsters in Myanmar who are
              enthusiastic about entrepreneurship and called it
              <strong> Start-Up challenge</strong> at around.
            </p>
            <ul className="extracurriculum__list">
              <li>Pitched for the funds of a start-up business</li>
              <li>
                Nominated to present in the <strong>top 10 finalists.</strong>
              </li>
              <li>
                Created a technological business concept about woman safety
              </li>
              <li>
                Presented <strong>mock-up of mobile application</strong> and how
                it is integrated with the business concept
              </li>
            </ul>
            <button className="view__video btn">
              <a
                href="https://youtu.be/MxXwDjoRcOk"
                target="_blank"
                rel="noreferrer"
              >
                View Video
              </a>
            </button>
          </div>
          <div>
            <img
              className="EC__img1"
              src={startup}
              alt="phandeeyar startup challenge"
            />
          </div>
        </div>
        <div className="extracurriculum__wrapper">
          <div className="EC__info">
            <h3 className="extracurriculum__title">WIT</h3>
            <small className="extracurriculum__duration">2020</small>
            <p className="extracurriculum__desc">
              <strong>WIT</strong> was held in early 2020 and it stands for{" "}
              <strong>Web Innovative talent </strong>. The purpose of this
              contest is to support Myanmar youths who have the innovative
              talent , want to challenge with new technologies, learn web design
              in daily life.
            </p>
            <ul className="extracurriculum__list">
              <li>
                Created a website that displays information about Myanmar
                traditional festivals.
              </li>
              <li>
                Utilized web programming languages:
                <strong> HTML, CSS, BootStrap</strong>
              </li>
              <li>Aimed for teamwork award on implementing the website</li>
              <li>
                Nominated to present in the<strong> top 10 finalists.</strong>
              </li>
            </ul>
            <button className="view__code btn">
              <a
                href="https://github.com/kevinhub-tech/WIT"
                target="_blank"
                rel="noreferrer"
              >
                View Code
              </a>
            </button>
          </div>
          <div>
            <img className="EC__img2" src={wit} alt="WIT logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EC;
