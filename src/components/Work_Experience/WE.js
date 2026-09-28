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
              <small className="duration">December 2024 - April 2026</small>
              <p className="work__desc">
                <strong>Web Developer · Dec 2024 - Oct 2025</strong>
                <br></br><br></br>
                Built 10+ mobile-first, responsive <strong>WordPress</strong> websites for client projects using <strong>Gutenberg</strong> and <strong>Elementor Pro</strong>, aligning pixel-perfect UI/UX with designer specifications.
                <br></br><br></br>
                Developed a reusable <strong>component and template library</strong>, cutting section-build time (e.g., homepage sections) from about 2 hours to minutes across all new client projects.
                <br></br><br></br>
                Managed web servers, mail systems, and SEO infrastructure with <strong>Google Tag Manager</strong>, ensuring high uptime and search visibility for clients.
              </p>
              <span className="left__workexperience__container__arrow"></span>
            </div>
          </div>
          <div className="workexperience__container workexperience__left__container">
            <div className="text-box">
              <small className="duration">November 2025 - April 2026</small>
              <p className="work__desc">
                <strong>Lead Web Developer · Nov 2025 - Apr 2026</strong>
                <br></br><br></br>
                Promoted to Lead within 11 months. Managed the full project delivery lifecycle across an average of 3 concurrent client engagements per week, from requirements through deployment and handoff.
                <br></br><br></br>
                Delivered 10 client websites spanning e-commerce, Shopify, WordPress, and SEO-focused landing pages, owning delivery from planning through QA, deployment, and client handoff.
                <br></br><br></br>
                Directed development of two client-facing <strong>CMS solutions</strong>: a <strong>headless WordPress + React</strong> system for 5 clients and a custom <strong>React + Node.js/Express</strong> CMS for 6-8 clients, enabling non-technical teams to manage content independently, using AI-assisted development tools (Cursor, Claude) to accelerate delivery.
                <br></br><br></br>
                Led headless e-commerce integrations (<strong>WordPress/WooCommerce API + React</strong>) for 3 clients, including one catalog of 500+ products.
                <br></br><br></br>
                Used <strong>Advanced Custom Fields (ACF)</strong> to structure custom data models across 5 client sites, enabling non-technical content updates without developer involvement.
                <br></br><br></br>
                Built custom <strong>Shopify themes</strong> using <strong>metafields</strong>, unlocking advanced e-commerce capabilities beyond platform defaults.
                <br></br><br></br>
                Led implementation of a <strong>Medusa v2 multi-storefront</strong> system consolidating product management for 2 client storefronts, eliminating duplicated manual product entry.
                <br></br><br></br>
                Automated a 12-article/month <strong>SEO content pipeline</strong> in <strong>Make.com</strong> (AI-generated research, writing, and imagery, routed through client approval to publish), cutting content production time from days to hours, and set up a multi-step email and SMS drip campaign for lead engagement.
                <br></br><br></br>
                Scaled delivery capacity by building and managing a team of up to 3 freelance developers alongside 1 in-house developer to handle growing project volume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WE;
