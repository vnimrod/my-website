import React from 'react';

import Buzz from './buzz/Buzz'
import ChatApp from './chat/Chat'
import Todos from './todos/Todos'
import MyWebsite from './myWebsite/MyWebsite'
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div data-aos="zoom-out" className="Portfolio" id="portfolio" >
      <h1>Portfolio</h1>
      <div className="Portfolio__cards">
        <div className="Portfolio__cards__item">
          <Buzz/>
        </div>
        <div className="Portfolio__cards__item">
          <ChatApp/>
        </div>
        <div className="Portfolio__cards__item">
          <Todos/>
        </div>
        <div className="Portfolio__cards__item">
          <MyWebsite/>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
