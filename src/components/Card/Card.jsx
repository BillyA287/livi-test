import React from 'react';
import './Card.css';
import Back from '../../assets/left.svg'
import Right from '../../assets/right.svg'

const Card = ({ question, onAnswer, finalMessage, onBack, onNext, currentQuestionPosition, isOptionSelected, position,handleAnswerClick }) => {
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
      <div className="question-card-container">


     
      <div className="nav-heading">
        <button className={`nav-back ${currentQuestionPosition === 0 || isOptionSelected === 0  ? 'disabled' : 'active'}`} onClick={onBack} disabled={currentQuestionPosition === 0 }><img src={Back}/></button> <h3 className='title'>
           Heartburn Checker
        </h3>
        <br/>
       <p className='current-position'>{position}</p>
      </div>
     
      {finalMessage ? (
        <div className='final-message-container'>
          <h2>{outcomeId} </h2>
          <p>{finalMessage.text}</p>
          {showBookingButton && <div className='booking-btn-container'> <button className='booking-btn'><p>Book a meeting</p><img src={Right} alt='right-arrow'/></button></div>}
          <p><a href='/' > Back to the start of the screen</a></p>
        </div>
      ) : (
        <div className='question-body'>
          
  
          <h3 className='question'>{question_text}</h3>
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
          <div className="next-btn-container ">
                <button className='next-btn '
  onClick={onNext}
> <p>Next</p>
  <img src={Right} alt='right-arrow'/>
</button>   
          </div>
   
        </div>
      )}
      


    </div>
    </div>
  );
};

export default Card;