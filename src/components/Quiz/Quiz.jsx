// Quiz.jsx
import React, { useState } from "react";
import data from "../../data/form.js";
import Card from "../Card/Card.jsx";

const Quiz = () => {
  // State for tracking quiz progress
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  // Function to update selected option index
  const totalScore = (selectedOption) => {
    setSelectedOptionIndex(selectedOption);
  };

  // Function to determine the final outcome message
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

  // Function to show the progress of the quiz
  const showProgress = () => {
    const position = currentQuestionPosition + 1;
    const totalQuestions = data.questions.length;
    return `${position}/${totalQuestions}`;
    
  };

  const handleReset = () => {
    setCurrentScore(0);
    setSelectedOptionIndex(null);
  };

  // Function to reset selected option index
  const nextUserQuestion = () => {
    setSelectedOptionIndex(null);
  };

  // Function to handle going back to the previous question
  const handleBack = () => {
    if (currentQuestionPosition > 0) {
      setCurrentQuestionPosition((prevPosition) => prevPosition - 1);
      setSelectedOptionIndex(null);
    }
  };

  

  // Function to handle going to the next question
  const handleNext = () => {
    if (selectedOptionIndex !== null && currentQuestionPosition < data.questions.length - 1) {
      const currentQuestion = data.questions[currentQuestionPosition];
      let answerScore = currentQuestion.answers[selectedOptionIndex].score;
      setCurrentScore((prevState) => prevState + answerScore);
      setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
      nextUserQuestion();
      setSelectedOptionIndex(null); // Reset selected option after updating score
    } else if (currentQuestionPosition < data.questions.length - 1) {
      setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
    }
  };

  // Function to get the current question
  const currentQuestion = () => {
    return data.questions[currentQuestionPosition];
  };

  // Check if there is a current question
  if (currentQuestion()) {
    const position = showProgress();
    const lastMessage = currentQuestionPosition === data.questions.length - 1;
    const outcome = lastMessage ? finalMessage() : null;

    return (
      <>
        {/* Render the Card component */}
        <Card
          key={currentQuestion().id}
          question={currentQuestion()}
          onAnswer={(selectedOption) => totalScore(selectedOption)}
          finalMessage={outcome}
          currentQuestionPosition={currentQuestionPosition}
          onBack={handleBack}
          onNext={handleNext}
          onReset={handleReset}
          selectedOptionIndex={selectedOptionIndex !== null}
          position={position}
        />
      </>
    );
  }

  // Default rendering when there is no current question
  return <div>Quiz</div>;
};

export default Quiz;