import React from 'react';

import './Skills.css';

const Skills = () => {
  return (
    <div
      data-aos="zoom-out"
      className="Skills"
      id="skills"
    >
      <h1>My Skills</h1>
      <div className="Skills__container">
        <div className="Skills__container Skills__container__frontend">
          <span className="Skills__container__title">Front-End Developing</span>
          <div className="Skills__container__skill-item">
            <span>HTML</span>
            <span>CSS3</span>
            <span>React.JS</span>
            <span>Redux.JS</span>
          </div>
        </div>
        <div className="Skills__container Skills__container__backend">
          <span className="Skills__container__title">Back-End Developing</span>
          <div className="Skills__container__skill-item">
            <span>Node.JS</span>
            <span>Express</span>
            <span>Building APIs</span>
            <span>Socket.IO</span>
            <span>MongoDB</span>
          </div>
        </div>
        <div className="Skills__container Skills__container__Programming-languages">
          <span className="Skills__container__title">
            Programming Languages
          </span>
          <div className="Skills__container__skill-item">
            <span>JavaScript</span>
            <span>Python</span>
            <span>C Programming</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
