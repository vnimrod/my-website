import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import buzzImg from '../../../assets/buzz.PNG';
import './Buzz.css';

const Buzz = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="BuzzFront">
        <div>
          <img src={buzzImg} onPointerEnter={onClick} />
        </div>
      </div>

      <div className="BuzzBack" onPointerLeave={onClick}>
        <div className="BuzzBack__about">
          <span>Buzz-Social Network App</span>
          <span>Where you can share your buzz with other friends.</span>
          <div className="BuzzBack__about__web">
            <a
              className="btn"
              href="https://weinstein-buzz-client.web.app/"
              target="_blank"
            >
              Website
            </a>
          </div>
          <div className="BuzzBack__about__github">
            <a
              className="btn"
              href="https://github.com/vnimrod/buzz-social-app/"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default Buzz;
