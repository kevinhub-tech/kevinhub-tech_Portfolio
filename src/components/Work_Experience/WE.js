import React from "react";
import "./WE.css";
import allmyanmaradvisor from "../../images/firstcompany.jpg";
import lithanandeduclaas from "../../images/secondcompany.jpg";
import gosg from "../../images/thirdcompany.jpg";
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
              <h2 className="company__name">Lithan | EduCLaaS (Singapore)</h2>
              <small className="duration"> May 2022 - June 2023</small>
              <p className="work__desc">
                Worked as a <strong>Technology Associate</strong> to implement
                landing pages that averages around <strong> 5,000 monthly viewer </strong> with <strong>WordPress</strong>.<br></br><br></br> Cooperative work
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
              <small className="duration">July 2023 - June 2024</small>
              <p className="work__desc">
                Migrated to work as a developer and worked with these technology: <strong> HTML, CSS, JQuery, JavaScript (ES6), AJAX, PHP, PDO, Laravel. </strong><br></br><br></br>
                Built a <strong>PHP-based Product Generator App</strong> using <strong>jQuery, AJAX and MVC pattern</strong>. <br></br><br></br>
                Developed an <strong>Automated Customer Proposal Generator</strong> with <strong>Laravel and ChatGPT </strong> for data analysis, serving <strong>6,000 customers/month </strong>.<br></br><br></br>
                Integrated above mentioned apps with <strong>HubSpot CRM </strong>to streamline the sales process.<br></br><br></br>
                Collaborated with team members to  <strong>conduct code reviews and implement changes for improved maintenance</strong>.
              </p>
            </div>
          </div>
          <div className="workexperience__container workexperience__left__container">
            <img src={gosg} alt="All Myanmar Advisor Logo" />
            <div className="text-box">
              <h2 className="company__name">
                G.O SG Consulting
              </h2>
              <small className="duration">December 2024 - Present</small>
              <p className="work__desc">
                Created and managed responsive WordPress pages with <strong>Gutenberg + Elementor Pro</strong> , tailored to diverse client needs across industries.
                <br></br><br></br>
                Collaborated closely with designers to ensure responsive, visually appealing, and <strong>user-friendly interfaces across all devices </strong>.
                <br></br><br></br>
                <strong>Maintained and configured servers hosting multiple WordPress sites </strong>, ensuring optimal performance and uptime.
                <br></br><br></br>
                Implemented <strong>SEO best practices and integrated Google Tag Manager </strong> to enhance site analytics and search visibility.
                <br></br><br></br>
                Set up and <strong>configured mail systems</strong> for WordPress sites, including SMTP and contact form integrations.
                <br></br><br></br>
                Developed custom <strong>WordPress templates</strong> to streamline website production and improve development efficiency.
                <br></br><br></br>
                Built bespoke features and functionalities based on specific client requirements <strong>using PHP, JavaScript, and WordPress hooks/APIs </strong>.
                <br></br><br></br>
                Managed team tasks and workflows to enhance <strong> collaboration, meet deadlines, and deliver high-performance results</strong>.
              </p>
              <span className="left__workexperience__container__arrow"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WE;
