import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/styles.scss';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
      <div className="about fixed-center">

          <IndexLink to="/" className="title-name white-text">
              CRYSTAL
              <button className="omara"></button>
              'MARA
          </IndexLink>

          <Link to="/about" id="menu-about-link" className="menu-link white-text">
              about
          </Link>

          <div className="globe">
              <div className="content-wrapper fixed-center">
                  <img className="about-pic" src="/./styles/images/about-pic.jpg"></img>
                      <div className="about-text">
                          Full-Stack Web developer with designer background that enjoys focusing on Front End Development and UI/UX. Highly enjoy creating responsive layouts and delivering pixel perfect user interfaces for optimal user experiences.
                      </div>
              </div>
          </div>

          <div className="globe globe-gradient fixed-center"></div>
          <div className="globe globe-black fixed-center"></div>

          <Link to="/work" id="menu-work-link" className="menu-link white-text">
              work
          </Link>

          <div className="contact-wrapper">
              <i className="fa fa-linkedin"></i>
              <i className="fa fa-envelope"></i>
              <i className="fa fa-github"></i>
          </div>
      </div>
    );
};

export default AboutPage;
