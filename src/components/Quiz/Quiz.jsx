// Quiz.jsx
import React, { useState } from "react";
import data from "../../data/form.js";
import Card from "../Card/Card.jsx";

const Quiz = () => {
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const totalScore = (selectedOption) => {
    setSelectedOptionIndex(selectedOption);

  };

  

  const finalMessage = () => {
    if (currentQuestionPosition === data.questions.length - 1) {
      let outcome;

      if (currentScore < 5) {
        outcome = data.outcomes.find(
          (outcome) => outcome.id === "rest_and_come_back_later"
        );
      } else if (currentScore >= 5 && currentScore < 49) {
        outcome = data.outcomes.find((outcome) => outcome.id === "see_a_doctor");
      } else {
        outcome = data.outcomes.find(
          (outcome) => outcome.id === "go_to_emergency_room"
        );
      }

      return outcome;
    }

    return null;
  };

  const showProgress = () => {
    const position = currentQuestionPosition + 1;
    const totalQuestions = data.questions.length;
    return `${position}/${totalQuestions}`;
  };



  const nextUserQuestion = () => {
    setSelectedOptionIndex(null);
    
  };

  const handleBack = () => {
    if (currentQuestionPosition > 0) {
      setCurrentQuestionPosition((prevPosition) => prevPosition - 1);
      setSelectedOptionIndex(null);
    }
  };

  const handleNext = () => {
    console.log("currentQuestionPosition:", currentQuestionPosition);
    console.log("data.questions.length:", data.questions.length);

    if (selectedOptionIndex !== null && currentQuestionPosition < data.questions.length - 1) {
      const currentQuestion = data.questions[currentQuestionPosition];
      let answerScore = currentQuestion.answers[selectedOptionIndex].score;
      setCurrentScore((prevState) => prevState + answerScore);
      setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
      nextUserQuestion();
      setSelectedOptionIndex(null); // Reset selected option after updating score
    } 
    else if (currentQuestionPosition < data.questions.length - 1) {
      setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
    }
    
  };

  const currentQuestion = () => {
    return data.questions[currentQuestionPosition];
  };

  if (currentQuestion()) {
    const position = showProgress();
    const lastMessage = currentQuestionPosition === data.questions.length - 1;
    const outcome = lastMessage ? finalMessage() : null;

    return (
      <>
   
        {/* <p>current score: {currentScore}</p> */}
        <Card
          key={currentQuestion().id}
          question={currentQuestion()}
          onAnswer={(selectedOption) => totalScore(selectedOption)}
          finalMessage={outcome}
          currentQuestionPosition={currentQuestionPosition}
          
          onBack={handleBack}
          onNext={handleNext}
          selectedOptionIndex={selectedOptionIndex !== null}
          position={position}
        />
      </>
    );
  }

  return <div>Quiz</div>;
};

export default Quiz;
