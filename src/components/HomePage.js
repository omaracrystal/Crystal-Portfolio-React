import React from 'react';
import { Link, IndexLink } from 'react-router';

const HomePage = () => {
  return (
      <div id="home" className="home">

          <div className="globe fixed-center content-wrapper">

              <Link to="/about" id="menu-about-link" className="menu-link white-text">
                  about
              </Link>

              <div className="group">
                  <IndexLink to="/" className="title-name white-text">
                      CRYSTAL
                      <button className="omara"></button>
                      'MARA
                  </IndexLink>
                  <hr/>
                  <div className="title-job">
                      front-end developer | UX/UI
                  </div>
              </div>

              <Link to="/work" id="menu-work-link" className="menu-link white-text">
                  work
              </Link>
          </div>

          <div className="globe globe-gradient fixed-center"></div>
          <div className="globe globe-black fixed-center"></div>

      </div>
  );
};

export default HomePage;
