// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>ACM Quiz</h1>
      <Link to="/quiz" className="btn play-btn">Start Quiz</Link>
      <Link to="/highscores" className="btn highscores-btn">View High Scores</Link>
    </div>
  );
}

export default Home;
