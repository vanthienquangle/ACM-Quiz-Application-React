// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=3&category=9&difficulty=easy&type=multiple') // Changed amount to 3
      .then((res) => {
        const formattedQuestions = res.data.results.map((loadedQuestion) => {
          const formattedQuestion = {
            question: loadedQuestion.question,
            correctAnswer: loadedQuestion.correct_answer,
            answers: [...loadedQuestion.incorrect_answers],
          };
          formattedQuestion.answers.splice(
            Math.floor(Math.random() * 4),
            0,
            loadedQuestion.correct_answer
          );
          return formattedQuestion;
        });
        setQuestions(formattedQuestions);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          console.error("Too many requests. Please try again later.");
          alert("You have exceeded the API rate limit. Please wait a few minutes and try again.");
        } else {
          console.error("Error fetching data:", error);
        }
      });
  }, []);
  

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 === questions.length) {
      navigate('/end', { state: { score } }); // Use navigate to redirect
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }} />
      {questions[currentQuestion].answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(answer)}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </div>
  );
}

export default Quiz;
