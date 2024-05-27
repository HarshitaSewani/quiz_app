import React, { useState, useEffect } from 'react';
import { fetchQuestions } from '../services/triviaConfig';
import Question from './Question';
import Results from './Results';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const getQuestions = async () => {
      const questions = await fetchQuestions();
      setQuestions(questions);
    };

    getQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return <Results score={score} />;
  }

  return questions.length > 0 ? (
    <Question
      question={questions[currentQuestionIndex]}
      handleAnswer={handleAnswer}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Quiz;
