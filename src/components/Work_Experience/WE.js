import React from "react";
import "./WE.css";
import allmyanmaradvisor from "../../images/firstcompany.jpg";
import lithanandeduclaas from "../../images/secondcompany.jpg";
function WE() {
  return (
    <div>
      <section className="workexperience section container" id="workexperience">
        <h2 className="workexperience__heading">Work Experience</h2>
        <hr></hr>
        <div className="workexperience__timeline">
          <div className="workexperience__container workexperience__left__container">
            <img src={allmyanmaradvisor} alt="All Myanmar Advisor Logo" />
            <div className="text-box">
              <h2 className="company__name">
                All Myanmar Advisor - Researcher
              </h2>
              <small className="duration">August 2019 & November 2019</small>
              <p className="work__desc">
                Worked as a <strong>part-timer researcher</strong> for two times
                (Once in August and in November).<br></br><br></br>
                <strong>Engagaed with customers</strong> in the field to
                <strong> collect data</strong> to analyse and to conduct
                consulting services to convenient stores.
              </p>
              <span className="left__workexperience__container__arrow"></span>
            </div>
          </div>
          <div className="workexperience__container workexperience__right__container">
            <img src={lithanandeduclaas} alt="EduCLaaS Logo" />
            <div className="text-box">
              <h2 className="company__name">Lithan | EduCLaaS</h2>
              <small className="duration"> May 2022 - June 2024</small>
              <p className="work__desc">
                Worked as a <strong>Technology Associate</strong> to implement
                landing pages with <strong>WordPress</strong>.<br></br><br></br> Cooperative work
                with content team and
                <strong> implemented chatbot plugin</strong> for their marketing
                campaign. <br></br><br></br>Learnt vast knowledge on
                <strong> fundamental flow of website</strong> and
                <strong> WordPress CRM.</strong>
              </p>
              <span className="right__workexperience__container__arrow"></span>
            </div>
          </div>
          <div className="workexperience__container workexperience__right__container">
            <div className="text-box">
              <p className="work__desc">
                Migrated to work as a developer and worked with these technology: <strong> HTML, CSS, JQuery, JavaScript (ES6), AJAX, PHP, PDO, Laravel. </strong><br></br><br></br>
                Utilized <strong>third-party API tools</strong> to meet project requirements effectively and adaptably.<br></br><br></br>
                <strong>Conducted research with team members</strong> to identify optimal solutions for new requirements<br></br><br></br>
                Collaborated with team members to  <strong>conduct code reviews and implement changes for improved maintenance</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WE;
