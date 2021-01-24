import React from 'react';

import linkedinIcon from '../../assets/Linked-In-icon.PNG';
import githubIcon from '../../assets/Github-icon.PNG';
import mailIcon from '../../assets/Mail-icon.PNG';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="Footer__container">
        <div className="Footer__container__items">
          <div className="Footer__logo">
            <span>NW</span>
          </div>
          <div className="Footer__icons">
            <a target="_blank" href="https://www.linkedin.com/in/nimrod-weinstein-813094169/">
              <img src={linkedinIcon} />
            </a>
            <a target="_blank" href="https://github.com/vnimrod">
              <img src={githubIcon} />
            </a>
            <a href="mailto: nimrod.weins@gmail.com">
              <img src={mailIcon} />
            </a>
          </div>
          <div className="Footer__create-by">
            <span>Create by Nimrod Weinstein 2021</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
