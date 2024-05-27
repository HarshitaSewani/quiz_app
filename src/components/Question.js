import React from 'react';

const Question = ({ question, handleAnswer }) => {
  const { question: questionText, correct_answer, incorrect_answers } = question;
  const answers = [...incorrect_answers, correct_answer].sort();

  return (
    <div>
      <h2>{questionText}</h2>
      <div>
        {answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer === correct_answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
