import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import chatImg from '../../../assets/ChatApp__img.PNG';
import './Chat.css';

const Chat = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="ChatFront">
        <div>
          <img src={chatImg} onPointerEnter={onClick} />
        </div>
      </div>

      <div className="ChatBack" onPointerLeave={onClick}>
        <div className="ChatBack__about">
          <span>Nims Chat App</span>
          <span>chat application, allowing users to join or create private chat rooms.</span>
          <div className="ChatBack__about__web">
            <a
              className="btn"
              href="https://weinstein-nims-chat-app-client.herokuapp.com/"
              target="_blank"
            >
              Website
            </a>
          </div>
          <div className="ChatBack__about__github">
            <a
              className="btn"
              href="https://github.com/vnimrod/nims-chat-app-client/"
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

export default Chat;
