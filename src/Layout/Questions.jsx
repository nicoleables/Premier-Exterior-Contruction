// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ".../styles/questions.css"; // Correct path to the CSS file
import "../styles/global.css";
import questionsimg from "../assets/questions/images/questionsimg.jpg";

const Questions = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswer((prev) => ({ ...prev, [question]: !prev[question] }));
  };

  return (
    <div className="questions">
      <div className="question-text-container">
        <div className="question-text">
          <h1>Frequently Asked Questions</h1>
          <span>
            <div className="question-item">
              <p className="qestimate">
                Is there a charge for getting an estimate from Premier Exterior Construction?
                <button onClick={() => toggleAnswer('qestimate')} className="toggle-btn">+</button>
              </p>
              {showAnswer.qestimate && <div className="answer">No, we provide free estimates for all of our welding services.</div>}
            </div>
            <div className="question-item">
              <p className="companies">
                How is Premier Exterior Construction different from other welding companies in the area?
                <button onClick={() => toggleAnswer('companies')} className="toggle-btn">+</button>
              </p>
              {showAnswer.companies && <div className="answer">Premier Exterior Construction stands out from the competition with our highly skilled team of certified welders, state-of-the-art equipment, and commitment to quality craftsmanship on every project.</div>}
            </div>
            <div className="question-item">
              <p className="qservices">
                What services do you provide?
                <button onClick={() => toggleAnswer('qservices')} className="toggle-btn">+</button>
              </p>
              {showAnswer.qservices && <div className="answer">Premier Exterior Construction provides a wide range of welding services, including structural welding, metal fabrication, pipe welding, and custom metal projects.</div>}
            </div>
          </span>
        </div>
      </div>
      <div className="question-img">
        <img className="question-image" src={questionsimg} alt="Question Image" />
      </div>
    </div>
  );
}

export default Questions;
