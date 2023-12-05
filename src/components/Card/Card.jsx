import React from 'react';
import './Card.css';

const Card = ({ question, onAnswer, finalMessage, onReset, onBack, onNext, currentQuestionPosition, isOptionSelected }) => {
  const { question_text, answers } = question;
  const outcomeId = finalMessage?.id.replace(/_/g, ' ');
  const showBookingButton = finalMessage?.show_booking_button || false;


  console.log("Final Message:", finalMessage); 
  console.log("isOptionSelected:", isOptionSelected);
  console.log("!question.next:", !question.next);
  console.log("currentQuestionPosition:", currentQuestionPosition);
  console.log("Array.isArray(question.next):", Array.isArray(question.next));
  console.log("question.next.length - 1:", Array.isArray(question.next) ? question.next.length - 1 : 0);
  
  return (
    <div className="question-card">
      <button onClick={onBack} disabled={currentQuestionPosition === 0 || isOptionSelected}>Back</button>
      {finalMessage ? (
        <div>
          <h2>{outcomeId} </h2>
          <p>{finalMessage.text}</p>
          {showBookingButton && <button>Show Booking Button</button>}
          <button onClick={onReset}>Reset</button>
        </div>
      ) : (
        <>
          
  
          <h3>{question_text}</h3>
          <div className="answer-options">
            {answers &&
              answers.map((answer, index) => (
                <button
                  key={answer.id}
                  onClick={() => {
                    if (!isOptionSelected) {
                      onAnswer(index);
                    }
                  }}
                  disabled={isOptionSelected}
                >
                  {answer.label}
                </button>
              ))}
          </div>
          <button
  onClick={onNext}
>
  Next
</button>
        </>
      )}
      


    </div>
  );
};

export default Card;
