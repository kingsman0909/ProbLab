import React, { useState } from "react";
import { FaCalculator, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/ProbabilityCalculator.css";

function ProbabilityCalculator() {
  const [probabilityA, setProbabilityA] = useState("");
  const [probabilityB, setProbabilityB] = useState("");
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState("addition");

  const calculate = () => {
    const a = Number(probabilityA) / 100;
    const b = Number(probabilityB) / 100;

    if (a < 0 || a > 1 || b < 0 || b > 1) {
      setResult("Invalid probability");
      return;
    }

    let answer;

    if (operation === "addition") {
      answer = a + b;
    } else {
      answer = a * b;
    }

    setResult(`${(answer * 100).toFixed(2)}%`);
  };

  const reset = () => {
    setProbabilityA("");
    setProbabilityB("");
    setResult(null);
    setOperation("addition");
  };

  return (
    <main className="probability-page">
      <div className="probability-container">

        <header className="probability-header">
          <Link to="/" className="probability-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="probability-title">
            <div className="probability-title-icon">
              <FaCalculator />
            </div>

            <div>
              <span className="probability-label">
                PROBABILITY RULES
              </span>

              <h1>Probability Calculator</h1>

              <p>
                Calculate probabilities using basic probability rules.
              </p>
            </div>
          </div>
        </header>

        <section className="probability-card">

          <div className="probability-form">
            <label>Probability A (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              value={probabilityA}
              onChange={(e) => setProbabilityA(e.target.value)}
              placeholder="Enter probability"
            />

            <label>Probability B (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              value={probabilityB}
              onChange={(e) => setProbabilityB(e.target.value)}
              placeholder="Enter probability"
            />

            <label>Operation</label>

            <select
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="addition">
                Addition Rule
              </option>

              <option value="multiplication">
                Multiplication Rule
              </option>
            </select>

            <div className="probability-actions">
              <button
                className="calculate-button"
                onClick={calculate}
              >
                <FaCalculator />
                Calculate
              </button>

              <button
                className="reset-button"
                onClick={reset}
              >
                <FaRedo />
                Reset
              </button>
            </div>
          </div>

          <div className="probability-result">
            <span>RESULT</span>

            <strong>
              {result || "--"}
            </strong>

            <p>
              {operation === "addition"
                ? "P(A) + P(B)"
                : "P(A) × P(B)"}
            </p>
          </div>

        </section>

        <section className="probability-learning">
          <span className="probability-label">
            LEARN
          </span>

          <h2>Probability Rules</h2>

          <p>
            The addition rule combines probabilities of events,
            while the multiplication rule finds the probability
            of events occurring together when applicable.
          </p>

          <div className="probability-formulas">
            <div>
              <strong>Addition Rule</strong>
              <span>P(A ∪ B) = P(A) + P(B)</span>
            </div>

            <div>
              <strong>Multiplication Rule</strong>
              <span>P(A ∩ B) = P(A) × P(B)</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default ProbabilityCalculator;