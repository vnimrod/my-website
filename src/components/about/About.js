import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Avatar from '../../assets/nimrod__img.PNG';
import './About.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="zoom-out" className="About">
      <div className="About__container">
        <div className="About__container__items" id="about">
          <div className="About__container__items__img">
          <h1>About Me</h1>
            <img src={Avatar} />
          </div>
          <div className="About__container__items__about">
            <span className="About__container__items__intro">
              Hi, I'm Nimrod
            </span>
            <span className="About__container__items__fs">
              I'm a Full Stack Developer
            </span>
            <span className="About__container__items__about_me">
              For the past year and a half I have been developing and learning
              the world of web independently. During my studies, I acquired a
              lot of knowledge about a wide variety of software languages
              related to the Full Stack world and fell in love with them. Today,
              I have knowledge in developing end-to-end applications from
              scratch that includes orderly construction both of the server and
              the client. I will define myself as an ambitious person, one who
              is not afraid of big and complex tasks and that code development
              is an integral part of my life. I would love to join and grow
              together with your company.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
