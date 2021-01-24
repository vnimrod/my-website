import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import myWebsiteImg from '../../../assets/my-website__img.PNG';
import './MyWebsite.css';

const MyWebsite = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="MyWebsiteFront">
        <div>
          <img src={myWebsiteImg} onPointerEnter={onClick} />
        </div>
      </div>

      <div className="MyWebsiteBack" onPointerLeave={onClick}>
        <div className="MyWebsiteBack__about">
          <span>My Personal Website</span>
          <span>Present me and my knowledge</span>
          <div className="MyWebsiteBack__about__web">
            <a
              className="btn"
              href="https://weinstein-nims-MyWebsite-app-client.herokuapp.com/"
              target="_blank"
            >
              Website
            </a>
          </div>
          <div className="MyWebsiteBack__about__github">
            <a
              className="btn"
              href="https://github.com/vnimrod/nims-MyWebsite-app-client/"
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

export default MyWebsite;
