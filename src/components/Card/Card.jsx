import React from 'react';
import './Card.css';

const Card = ({ question, onAnswer, finalMessage, onReset, onBack, onNext }) => {
  // destructure props from question
  const { question_text, answers } = question;
  
  const outcomeId = finalMessage?.id.replace(/_/g, ' ');
  

  return (
    <div className="question-card">
      {finalMessage ? (
        <div><h2>{outcomeId} </h2>
        <p>{finalMessage.text}</p>
        <button onClick={onReset}>Reset</button></div> 
        
      ) : (
        <>
        <button onClick={onBack}>back</button>
        <button onClick={onNext}>forward</button>
          <h3>{question_text}</h3>
          <div className="answer-options">
           
            {answers &&
              answers.map((answer, index) => (
                <button key={answer.id} onClick={() => onAnswer(index)}>
                  {answer.label}
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
