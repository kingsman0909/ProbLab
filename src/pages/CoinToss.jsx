import React, { useState } from "react";
import { FaCoins, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/CoinToss.css";

function CoinToss() {
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    setCurrentResult(result);
    setResults((prev) => [...prev, result]);
  };

  const resetSimulation = () => {
    setResults([]);
    setCurrentResult(null);
  };

  const totalFlips = results.length;
  const heads = results.filter((result) => result === "Heads").length;
  const tails = results.filter((result) => result === "Tails").length;

  const getProbability = (count) => {
    if (totalFlips === 0) return 0;

    return ((count / totalFlips) * 100).toFixed(1);
  };

  return (
    <main className="coin-page">

      <div className="coin-container">

        <header className="coin-header">

          <Link to="/" className="coin-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="coin-title">

            <div className="coin-title-icon">
              <FaCoins />
            </div>

            <div>
              <span className="coin-label">
                BASIC PROBABILITY
              </span>

              <h1>Coin Toss</h1>

              <p>
                Flip a coin and observe experimental probability.
              </p>
            </div>

          </div>

        </header>


        <section className="coin-simulator">

          <span className="coin-display-label">
            CURRENT RESULT
          </span>

          <div className="coin-face">
            {currentResult ? currentResult.charAt(0) : "?"}
          </div>

          <h2>
            {currentResult || "Ready to flip"}
          </h2>

          <button
            className="flip-button"
            onClick={flipCoin}
          >
            <FaCoins />
            Flip Coin
          </button>

        </section>


        <section className="coin-stats">

          <div className="coin-stat">
            <span>Total Flips</span>
            <strong>{totalFlips}</strong>
          </div>

          <div className="coin-stat">
            <span>Heads</span>
            <strong>{heads}</strong>
            <small>{getProbability(heads)}%</small>
          </div>

          <div className="coin-stat">
            <span>Tails</span>
            <strong>{tails}</strong>
            <small>{getProbability(tails)}%</small>
          </div>

        </section>


        <section className="coin-results">

          <div className="coin-results-header">

            <div>
              <span className="coin-label">
                PROBABILITY RESULTS
              </span>

              <h2>Experimental vs. Theoretical</h2>
            </div>

            <button
              className="coin-reset"
              onClick={resetSimulation}
            >
              <FaRedo />
              Reset
            </button>

          </div>

          <div className="coin-table">

            <div className="coin-row coin-heading">
              <span>Outcome</span>
              <span>Frequency</span>
              <span>Experimental</span>
              <span>Theoretical</span>
            </div>

            <div className="coin-row">
              <span>Heads</span>
              <span>{heads}</span>
              <span>{getProbability(heads)}%</span>
              <span>50%</span>
            </div>

            <div className="coin-row">
              <span>Tails</span>
              <span>{tails}</span>
              <span>{getProbability(tails)}%</span>
              <span>50%</span>
            </div>

          </div>

        </section>


        <section className="coin-learning">

          <span className="coin-label">
            LEARN
          </span>

          <h2>Basic Probability</h2>

          <p>
            A fair coin has two possible outcomes: Heads and Tails.
            Each outcome has a theoretical probability of 50%.
            Repeating the experiment allows us to observe
            experimental probability.
          </p>

        </section>


      </div>

    </main>
  );
}

export default CoinToss;