import React, { useState } from 'react';

import ReactCardFlip from 'react-card-flip';
import todosImg from '../../../assets/todos__img.PNG';
import './Todos.css';

const Todos = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="TodosFront">
        <div>
          <img src={todosImg} onPointerEnter={onClick} />
        </div>
      </div>

      <div className="TodosBack" onPointerLeave={onClick}>
        <div className="TodosBack__about">
          <span>Todos App</span>
          <span>Write the todos of your day</span>
          <div className="TodosBack__about__github">
            <a
              className="btn"
              href="https://github.com/vnimrod/My-Todos-List/"
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

export default Todos;
