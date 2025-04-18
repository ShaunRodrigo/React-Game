import React, { useState } from 'react';

const DiceRoller = () => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [rolls, setRolls] = useState([]);

  const rollDice = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(number);
    setRolls([number, ...rolls.slice(0, 4)]); // Show last 5 rolls
  };

  return (
    <div>
      <h2>🎲 Dice Roller</h2>
      <button onClick={rollDice}>Roll the Dice</button>
      {diceNumber && <h3>You rolled: {diceNumber}</h3>}
      <p>Last 5 Rolls:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {rolls.map((num, index) => (
          <div
            key={index}
            style={{
              width: '40px',
              height: '40px',
              background: '#333',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#fff',
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiceRoller;