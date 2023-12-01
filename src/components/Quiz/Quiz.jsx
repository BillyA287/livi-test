import React, { useState } from 'react';
import questions from '../../data/form';
import Card from '../Card/Card.jsx';

const Quiz = () => {
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const totalScore = (score, nextQuestion) => {
    setCurrentScore((prevScore) => score + prevScore);
    nextUserQuestion();
  };

  const nextUserQuestion = () => {
    setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
  };

  const currentQuestion = () => {
    return questions.questions[currentQuestionPosition];
  };

  if (currentQuestion()) {
    return (
      <Card
        key={currentQuestion().id}
        question={currentQuestion()}
        onAnswer={totalScore}
      />
    );
  }

  return <div>Quiz</div>;
};

export default Quiz;
