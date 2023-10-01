import React, { useState } from 'react';
import FlashCard from './components/Flashcard.jsx';
import NextButton from './components/NextButton.jsx';

// import FlashCard from './FlashCard';
// import NextButton from './NextButton';
// import './App.css'; // Import your main CSS file


const App = () => {
  const cards = [
    { front: '1st president', back: 'George Washington.' },
    { front: '2nd president', back: 'John Adams.' },
    { front: '3rd president', back: 'Thomas Jefferson' },
    { front: '4th president', back: 'James Madison' },
    { front: '5th president', back: 'James Monroe' },
    { front: '6th president', back: 'John Quincy Adams' },
    { front: '7th president', back: 'Andrew Jackson' },
    { front: '9th president', back: 'John Adams.' },
    { front: '10th presidengt', back: 'Martin Van Buren' },
    // Add more cards as needed
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div className="container">
        <div className='header'>
          <h1>Fun Politic facts</h1>
          <h2>Do you know all of the presidents?</h2>
      </div>
      <FlashCard frontContent={currentCard.front} backContent={currentCard.back} />
      <NextButton onClick={handleNextCard} />
    </div>
  );
};

export default App;
