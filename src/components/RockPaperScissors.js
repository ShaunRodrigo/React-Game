import React, { useState } from 'react';

const choices = ['Rock', 'Paper', 'Scissors'];

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const play = (choice) => {
    const comp = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice);
    setComputerChoice(comp);

    if (choice === comp) {
      setResult("It's a draw!");
    } else if (
      (choice === 'Rock' && comp === 'Scissors') ||
      (choice === 'Paper' && comp === 'Rock') ||
      (choice === 'Scissors' && comp === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      {choices.map((choice) => (
        <button key={choice} onClick={() => play(choice)}>
          {choice}
        </button>
      ))}
      <p>Your choice: {userChoice}</p>
      <p>Computer: {computerChoice}</p>
      <h3>{result}</h3>
    </div>
  );
};

export default RockPaperScissors;