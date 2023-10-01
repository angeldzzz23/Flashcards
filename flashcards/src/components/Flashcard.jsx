import React, { useState } from 'react';
import './FlashCard.css';

const FlashCard = ({ frontContent, backContent }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        {frontContent}
      </div>
      <div className="back">
        {backContent}
      </div>
    </div>
  );
};

export default FlashCard;
