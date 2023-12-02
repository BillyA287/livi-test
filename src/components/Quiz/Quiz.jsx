import React, { useState } from "react";
import questions from "../../data/form.js";
import Card from "../Card/Card.jsx";

const Quiz = () => {
  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const totalScore = (selectedOption) => {
    // create current question position as we use this to access the score
    const currentQuestion = questions.questions[currentQuestionPosition];
    // when an answer is clicked we need to check if current question we want to access is in range
    console.log(selectedOption);
    if (
      currentQuestion &&
      currentQuestion.answers &&
      currentQuestion.answers.length > selectedOption
    ) {
      // if it is we capture the score value of the selected answer
      let answerScore = currentQuestion.answers[selectedOption].score;
      // update the state with an updater function to calculate current total score
      setCurrentScore((prevState) => prevState + answerScore);

      nextUserQuestion();
      console.log("option value", selectedOption);
      console.log(currentScore);
      console.log(currentQuestion);
    }
  };

  // result message function
  const finalMessage = () => {
    // Check if the user has completed the questionnaire
    if (currentQuestionPosition === questions.questions.length - 1) {
      // Determine the outcome based on the user's score
      let outcome;

      if (currentScore < 5) {
        outcome = questions.outcomes.find(
          (outcome) => outcome.id === "rest_and_come_back_later"
        );
      } else if (currentScore >= 5 && currentScore < 49) {
        outcome = questions.outcomes.find(
          (outcome) => outcome.id === "see_a_doctor"
        );
      } else {
        outcome = questions.outcomes.find(
          (outcome) => outcome.id === "go_to_emergency_room"
        );
      }

      return outcome; // Return the outcome directly
    }

    return null;
  };

  // calculate current question position in list and display to user
  const showProgress = () => {
    const position = currentQuestionPosition + 1;
    const totalQuestions = questions.questions.length;
    return `${position}/${totalQuestions}`;
  };

  const handleReset = () => {
    setCurrentQuestionPosition(0);
    setCurrentScore(0)
  }

  const nextUserQuestion = () => {
    setCurrentQuestionPosition((prevPosition) => prevPosition + 1);
  };

  const handleBack =()=>{
    setCurrentQuestionPosition((prevPosition) => prevPosition - 1);

  }

  const handleNext = () => {
    nextUserQuestion()

  }


  const currentQuestion = () => {
    return questions.questions[currentQuestionPosition];
  };

  if (currentQuestion()) {
    const position = showProgress();
    const lastMessage =
      currentQuestionPosition === questions.questions.length - 1;
    const outcome = lastMessage ? finalMessage() : null; // Get the outcome

    return (
      <>
        <p>{position}</p>
        <p>current score:{currentScore}</p>
        <Card
          key={currentQuestion().id}
          question={currentQuestion()}
          onAnswer={(selectedOption) => totalScore(selectedOption)}
          finalMessage={outcome} // Pass the outcome as a prop
          currentQuestionPosition={currentQuestionPosition}
          questions={questions}
          onReset={handleReset}
          onBack={handleBack}
          onNext={handleNext}
        />
      </>
    );
  }

  return <div>Quiz</div>;
};

export default Quiz;
