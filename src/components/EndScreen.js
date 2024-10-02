// src/components/EndScreen.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function EndScreen() {
  const location = useLocation();
  const { score } = location.state;
  const [username, setUsername] = useState('');

  const saveScore = () => {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const newScore = { score, username };
    highScores.push(newScore);
    localStorage.setItem('highScores', JSON.stringify(highScores));
  };

  return (
    <div className="end-screen-container">
      <h1>Your Score: {score}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <div className="button-container">
        <Link to="/" className="btn save-btn" onClick={saveScore}>
          Save Score
        </Link>
        <Link to="/quiz" className="btn play-again-btn">Play Again</Link>
      </div>
    </div>
  );
}

export default EndScreen;
