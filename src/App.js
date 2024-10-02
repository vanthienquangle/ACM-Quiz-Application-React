// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import HighScores from './components/HighScores';

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/end" element={<EndScreen />} />
          <Route path="/highscores" element={<HighScores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
