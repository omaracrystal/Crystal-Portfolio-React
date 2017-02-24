import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
      <div id="home" className="home">

          <div className="globe fixed-center content-wrapper">

              <div id="menu-about-link" className="menu-link">
                  <a href="" className="white-text">about</a>
              </div>

              <div className="group">
                  <div className="title-name">
                      <a href="" className="white-text">CRYSTAL
                          <button className="omara"></button>'MARA
                      </a>
                  </div>
                  <hr></hr>
                  <div className="title-job">
                      front-end developer | UX/UI
                  </div>
              </div>

              <div id="menu-work-link" className="menu-link">
                  <a href="" className="white-text">work</a>
              </div>
          </div>

          <div className="globe globe-gradient fixed-center"></div>
          <div className="globe globe-black fixed-center"></div>

      </div>
  );
};

export default HomePage;
