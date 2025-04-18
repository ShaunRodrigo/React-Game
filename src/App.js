import React, { useState } from 'react';
import RockPaperScissors from './components/RockPaperScissors';
import DiceRoll from './components/DiceRoll';
import './App.css';

function App() {
  const [activeApp, setActiveApp] = useState('rps');

  return (
    <div className="App">
      <h1>React</h1>
      <div className="menu">
        <button onClick={() => setActiveApp('rps')}>Rock Paper Scissors</button>
        <button onClick={() => setActiveApp('dice')}>Dice Roller</button>
      </div>

      <div className="game-area">
        {activeApp === 'rps' && <RockPaperScissors />}
        {activeApp === 'dice' && <DiceRoll />}
      </div>
    </div>
  );
}

export default App;