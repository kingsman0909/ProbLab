import React, { useState } from "react";
import { FaChartPie, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/ConditionalProbability.css";

function ConditionalProbability() {
  const [jointProbability, setJointProbability] = useState("");
  const [conditionProbability, setConditionProbability] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const joint = Number(jointProbability);
    const condition = Number(conditionProbability);

    if (
      jointProbability === "" ||
      conditionProbability === "" ||
      joint < 0 ||
      joint > 100 ||
      condition <= 0 ||
      condition > 100 ||
      joint > condition
    ) {
      setResult("Invalid values");
      return;
    }

    const answer = (joint / condition) * 100;
    setResult(`${answer.toFixed(2)}%`);
  };

  const reset = () => {
    setJointProbability("");
    setConditionProbability("");
    setResult(null);
  };

  return (
    <main className="conditional-page">
      <div className="conditional-container">

        <header className="conditional-header">
          <Link to="/" className="conditional-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="conditional-title">
            <div className="conditional-title-icon">
              <FaChartPie />
            </div>

            <div>
              <span className="conditional-label">
                CONDITIONAL PROBABILITY
              </span>

              <h1>Conditional Probability</h1>

              <p>
                Calculate the probability of an event given another event.
              </p>
            </div>
          </div>
        </header>

        <section className="conditional-card">

          <div className="conditional-form">
            <label>P(A ∩ B) — Joint Probability (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={jointProbability}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  (Number(value) >= 0 && Number(value) <= 100)
                ) {
                  setJointProbability(value);
                }
              }}
              placeholder="e.g. 20"
            />

            <label>P(B) — Condition Probability (%)</label>

            <input
              type="number"
              min="0.01"
              max="100"
              step="0.01"
              value={conditionProbability}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  (Number(value) > 0 && Number(value) <= 100)
                ) {
                  setConditionProbability(value);
                }
              }}
              placeholder="e.g. 40"
            />

            <div className="conditional-actions">
              <button
                className="conditional-calculate"
                onClick={calculate}
              >
                Calculate
              </button>

              <button
                className="conditional-reset"
                onClick={reset}
              >
                <FaRedo />
                Reset
              </button>
            </div>
          </div>

          <div className="conditional-result">
            <span>RESULT</span>

            <strong>
              {result || "--"}
            </strong>

            <p>P(A | B)</p>
          </div>

        </section>

        <section className="conditional-learning">
          <span className="conditional-label">
            LEARN
          </span>

          <h2>Conditional Probability</h2>

          <p>
            Conditional probability measures the probability of
            event A occurring when event B is already known to have occurred.
          </p>

          <div className="conditional-formula">
            <strong>P(A | B)</strong>

            <span>
              = P(A ∩ B) ÷ P(B)
            </span>
          </div>

          <p className="conditional-note">
            P(B) must be greater than 0, and the joint probability
            P(A ∩ B) cannot be greater than P(B).
          </p>
        </section>

      </div>
    </main>
  );
}

export default ConditionalProbability;