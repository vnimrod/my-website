import React, { Fragment } from 'react';

import NavBar from '../navBar/NavBar';
import About from '../about/About';
import Skills from '../skills/Skills';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
import './HomePage.css';
import Footer from '../footer/Footer';

const HomePage = () => {
  return (
    <Fragment>
      <header>
        <NavBar />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </header>
      <Footer />
    </Fragment>
  );
};

export default HomePage;
