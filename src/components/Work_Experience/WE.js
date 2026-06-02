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
            <img src={gosg} alt="G.O SG Consulting Logo" />
            <div className="text-box">
              <h2 className="company__name">
                G.O SG Consulting
              </h2>
              <small className="duration">December 2024 - Present</small>
              <p className="work__desc">
                <strong>Web Developer · Dec 2024 – Oct 2025</strong>
                <br></br><br></br>
                Built mobile-first, responsive WordPress sites using <strong>Gutenberg</strong> and <strong>Elementor Pro</strong>, delivering pixel-perfect UI/UX across multiple client projects.
                <br></br><br></br>
                Developed a reusable <strong>component and template library</strong> that significantly sped up production time across all new projects.
                <br></br><br></br>
                Managed web servers, mail systems, and SEO infrastructure using <strong>Google Tag Manager</strong>, maintaining high uptime and search visibility for clients.
              </p>
              <span className="left__workexperience__container__arrow"></span>
            </div>
          </div>
          <div className="workexperience__container workexperience__left__container">
            <div className="text-box">
              <small className="duration">December 2024 - Present</small>
              <p className="work__desc">
                <strong>Lead Web Developer · Nov 2025 – Apr 2026</strong>
                <br></br><br></br>
                Promoted to Lead within 11 months, taking full ownership of project delivery, team management, and client communication.
                <br></br><br></br>
                Built an in-house <strong>CMS (React + Node.js/Express)</strong> that centralized content updates across all client websites, reducing turnaround time.
                <br></br><br></br>
                Engineered a fully automated <strong>SEO + lead nurturing pipeline</strong> via <strong>Make.com</strong> — AI-generated articles and images route through client approval and publish live.
                <br></br><br></br>
                Set up a multi-step <strong>email and SMS drip campaign</strong> for lead engagement as part of the automation workflow.
                <br></br><br></br>
                Developed a <strong>Medusa v2 multi-storefront</strong> system that centralized product management and eliminated duplicated work across storefronts.
                <br></br><br></br>
                Built custom <strong>Shopify themes</strong> using <strong>metafields</strong> to unlock advanced e-commerce capabilities beyond platform defaults.
                <br></br><br></br>
                Scaled team capacity by recruiting and managing freelance developers as project volume grew.
                <br></br><br></br>
                Served as the primary client-facing engineer — scoping requirements, managing expectations, and owning delivery from planning through deployment and handoff.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WE;
