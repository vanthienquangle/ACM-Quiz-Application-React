// src/components/HighScores.js
import React from 'react';
import { Link } from 'react-router-dom';

function HighScores() {
  const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  return (
    <div className="highscores-container">
      <h1>High Scores</h1>
      <ul className="highscore-list">
        {highScores.map((score, index) => (
          <li key={index} className="highscore-item">
            {score.username} - {score.score}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default HighScores;
