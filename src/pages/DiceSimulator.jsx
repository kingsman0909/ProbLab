import React, { useState } from "react";
import { FaDice, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/DiceSimulator.css";

function DiceSimulator() {
  const [rolls, setRolls] = useState([]);
  const [currentRoll, setCurrentRoll] = useState(null);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;

    setCurrentRoll(result);
    setRolls((prev) => [...prev, result]);
  };

  const resetSimulation = () => {
    setRolls([]);
    setCurrentRoll(null);
  };

  const totalRolls = rolls.length;

  const getCount = (number) => {
    return rolls.filter((roll) => roll === number).length;
  };

  const getExperimentalProbability = (number) => {
    if (totalRolls === 0) return 0;

    return ((getCount(number) / totalRolls) * 100).toFixed(1);
  };

  return (
    <main className="dice-page">

      <div className="dice-container">

        {/* Header */}
        <header className="dice-header">

          <Link to="/" className="dice-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="dice-title">

            <div className="dice-title-icon">
              <FaDice />
            </div>

            <div>
              <span className="dice-label">
                EXPERIMENTAL PROBABILITY
              </span>

              <h1>Dice Simulator</h1>

              <p>
                Roll a die and compare experimental probability
                with theoretical probability.
              </p>
            </div>

          </div>

        </header>


        {/* Simulator */}
        <section className="dice-simulator">

          <div className="dice-display">

            <span className="display-label">
              CURRENT ROLL
            </span>

            <div className="dice-face">
              {currentRoll || "?"}
            </div>

            <button
              className="roll-button"
              onClick={rollDice}
            >
              <FaDice />
              Roll Dice
            </button>

          </div>


          {/* Stats */}
          <div className="dice-stats">

            <div className="stat-card">
              <span>Total Rolls</span>
              <strong>{totalRolls}</strong>
            </div>

            <div className="stat-card">
              <span>Theoretical Probability</span>
              <strong>16.7%</strong>
              <small>Each side = 1/6</small>
            </div>

            <div className="stat-card">
              <span>Possible Outcomes</span>
              <strong>6</strong>
              <small>1 through 6</small>
            </div>

          </div>

        </section>


        {/* Results */}
        <section className="dice-results">

          <div className="results-header">

            <div>
              <span className="dice-label">
                PROBABILITY RESULTS
              </span>

              <h2>Experimental vs. Theoretical</h2>
            </div>

            <button
              className="reset-button"
              onClick={resetSimulation}
            >
              <FaRedo />
              Reset
            </button>

          </div>


          <div className="probability-table">

            <div className="table-row table-heading">
              <span>Outcome</span>
              <span>Frequency</span>
              <span>Experimental</span>
              <span>Theoretical</span>
            </div>

            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div className="table-row" key={number}>

                <span className="outcome">
                  {number}
                </span>

                <span>
                  {getCount(number)}
                </span>

                <span>
                  {getExperimentalProbability(number)}%
                </span>

                <span>
                  16.7%
                </span>

              </div>
            ))}

          </div>

        </section>


        {/* Explanation */}
        <section className="dice-learning">

          <span className="dice-label">
            WHAT'S HAPPENING?
          </span>

          <h2>Experimental Probability</h2>

          <p>
            Experimental probability is calculated by dividing
            the number of times an outcome occurs by the total
            number of trials.
          </p>

          <div className="formula">
            Experimental Probability =
            <span>
              Number of favorable outcomes
              <br />
              ─────────────────────────
              <br />
              Total number of trials
            </span>
          </div>

          <p className="learning-note">
            Try rolling the die many times. As the number of
            trials increases, the experimental probabilities
            should generally become closer to the theoretical
            probability of 16.7% for each side.
          </p>

        </section>

      </div>

    </main>
  );
}

export default DiceSimulator;