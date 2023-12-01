import React from 'react'

const Card = ({question, onAnswer}) => {
    // destructure props from question
    const {id, question_text, answers} = question;
  return (
    <div className="question-card">
    <h3>{question_text}</h3>
    <div className="answer-options">
      {answers&& answers.map((answer) => (
        <button key={answer.id} onClick={() => onAnswer(id, answer)}>
          {answer.label}
        </button>
      ))}
    </div>
  </div>
  )
}

export default Card