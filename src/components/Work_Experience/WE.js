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
                (Once in August and in November).
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
              <small className="duration"> May 2022 - June 2023</small>
              <p className="work__desc">
                Worked as a <strong>Technology Associate</strong> to implement
                landing pages with <strong>WordPress</strong>. Cooperative work
                with content team and
                <strong> implemented chatbot plugin</strong> for their marketing
                campaign. Learnt vast knowledge on
                <strong> fundamental flow of website</strong> and
                <strong> WordPress CRM.</strong>
              </p>
              <span className="right__workexperience__container__arrow"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WE;
