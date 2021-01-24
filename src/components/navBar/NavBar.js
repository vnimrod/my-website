import React from 'react';

import { Link } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <a href="/">
          <span>NW</span>
        </a>
      </div>
      <div className="NavBar__list">
        <ul className="NavBar__list__items">
          <li className="NavBar__list-item">
            <Link offset={-100} to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li className="NavBar__list-item">
            <Link offset={-100} to="skills" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li className="NavBar__list-item">
            <Link offset={-100} to="portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li className="NavBar__list-item">
            <Link offset={-100} to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
