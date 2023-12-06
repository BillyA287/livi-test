import React from "react";
import "./Card.css";
import Back from "../../assets/left.svg";
import Right from "../../assets/right.svg";

const Card = ({
  question,
  onAnswer,
  finalMessage,
  onBack,
  onNext,
  currentQuestionPosition,
  isOptionSelected,
  position,
}) => {
  // Destructure properties from the question object
  const { question_text, answers } = question;

  // Process the outcome ID to remove underscores and capitalize the first letter
  const outcomeId = finalMessage?.id.replace(/_/g, ' ').charAt(0).toUpperCase() + finalMessage?.id.replace(/_/g, ' ').slice(1);

  // Check if booking button should be displayed
  const showBookingButton = finalMessage?.show_booking_button || false;

  return (
    <div className="question-card">
      <div className="question-card-container">
        <div className="nav-heading">
          {/* Back button with conditional classes */}
          <button
            className={`nav-back ${
              currentQuestionPosition === 0 || isOptionSelected === 0
                ? "disabled"
                : "active"
            }`}
            onClick={onBack}
            disabled={currentQuestionPosition === 0}
          >
            <img src={Back} alt="left-arrow" />
          </button>{" "}
          <h3 className="title">Heartburn Checker</h3>
          <br />
          <p className="current-position">{position}</p>
        </div>

        {/* Render final message or question body */}
        {finalMessage ? (
          <div className="final-message-container">
            <h2>{outcomeId}</h2>
            <p>{finalMessage.text}</p>
            {/* Render booking button if necessary */}
            {showBookingButton && (
              <div className="booking-btn-container">
                <button className="booking-btn">
                  <p>Book a meeting</p>
                  <img src={Right} alt="right-arrow" />
                </button>
              </div>
            )}
            <p>
              <a href="/"> Back to the start of the screen</a>
            </p>
          </div>
        ) : (
          <div className="question-body">
            {/* Render question text and answer options */}
            <h3 className="question">{question_text}</h3>
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
            {/* Render next button */}
            <div className="next-btn-container ">
              <button className="next-btn " onClick={onNext}>
                {" "}
                <p>Next</p>
                <img src={Right} alt="right-arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;