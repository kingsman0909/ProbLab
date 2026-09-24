import React, { useState } from "react";
import { FaFlask, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/BayesSimulator.css";

function BayesSimulator() {
  const [conditionalProbability, setConditionalProbability] = useState("");
  const [priorProbability, setPriorProbability] = useState("");
  const [evidenceProbability, setEvidenceProbability] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const conditional = Number(conditionalProbability);
    const prior = Number(priorProbability);
    const evidence = Number(evidenceProbability);

    if (
      conditionalProbability === "" ||
      priorProbability === "" ||
      evidenceProbability === "" ||
      conditional < 0 ||
      conditional > 100 ||
      prior < 0 ||
      prior > 100 ||
      evidence <= 0 ||
      evidence > 100
    ) {
      setResult("Invalid values");
      return;
    }

    const posterior =
      (conditional / 100 * (prior / 100)) /
      (evidence / 100);

    if (posterior > 1) {
      setResult("Invalid combination");
      return;
    }

    setResult(`${(posterior * 100).toFixed(2)}%`);
  };

  const reset = () => {
    setConditionalProbability("");
    setPriorProbability("");
    setEvidenceProbability("");
    setResult(null);
  };

  return (
    <main className="bayes-page">
      <div className="bayes-container">

        <header className="bayes-header">
          <Link to="/" className="bayes-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="bayes-title">
            <div className="bayes-title-icon">
              <FaFlask />
            </div>

            <div>
              <span className="bayes-label">
                BAYES' THEOREM
              </span>

              <h1>Bayes Simulator</h1>

              <p>
                Explore how prior probability and evidence affect
                posterior probability.
              </p>
            </div>
          </div>
        </header>

        <section className="bayes-card">

          <div className="bayes-form">

            <label>P(B | A) — Conditional Probability (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={conditionalProbability}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  (Number(value) >= 0 && Number(value) <= 100)
                ) {
                  setConditionalProbability(value);
                }
              }}
              placeholder="e.g. 80"
            />

            <label>P(A) — Prior Probability (%)</label>

            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={priorProbability}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  (Number(value) >= 0 && Number(value) <= 100)
                ) {
                  setPriorProbability(value);
                }
              }}
              placeholder="e.g. 20"
            />

            <label>P(B) — Evidence Probability (%)</label>

            <input
              type="number"
              min="0.01"
              max="100"
              step="0.01"
              value={evidenceProbability}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  (Number(value) > 0 && Number(value) <= 100)
                ) {
                  setEvidenceProbability(value);
                }
              }}
              placeholder="e.g. 40"
            />

            <div className="bayes-actions">
              <button
                className="bayes-calculate"
                onClick={calculate}
              >
                <FaFlask />
                Calculate
              </button>

              <button
                className="bayes-reset"
                onClick={reset}
              >
                <FaRedo />
                Reset
              </button>
            </div>

          </div>

          <div className="bayes-result">
            <span>POSTERIOR PROBABILITY</span>

            <strong>
              {result || "--"}
            </strong>

            <p>P(A | B)</p>
          </div>

        </section>

        <section className="bayes-learning">
          <span className="bayes-label">
            LEARN
          </span>

          <h2>Bayes' Theorem</h2>

          <p>
            Bayes' theorem updates the probability of an event
            using prior probability and new evidence.
          </p>

          <div className="bayes-formula">
            <strong>P(A | B)</strong>

            <span>
              = P(B | A) × P(A) ÷ P(B)
            </span>
          </div>

          <p className="bayes-note">
            Probabilities must be between 0% and 100%, and
            P(B) must be greater than 0%.
          </p>
        </section>

      </div>
    </main>
  );
}

export default BayesSimulator;