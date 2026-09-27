
import React, { useState } from "react";
import {
  FaCoins,
  FaArrowLeft,
  FaRedo
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "../styles/CoinToss.css";

function CoinToss() {
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [rotation, setRotation] = useState(0);

  const flipCoin = () => {
    if (isFlipping) return;

    setIsFlipping(true);

    // Generate the result
    const result =
      Math.random() < 0.5 ? "Heads" : "Tails";

    // Heads = 0 degrees, Tails = 180 degrees
    const finalRotation =
      result === "Heads" ? 0 : 180;

    // Add multiple full rotations before landing
    const currentRotation = rotation;
    const fullSpins = 5 * 360;

    const normalizedRotation =
      Math.ceil(currentRotation / 360) * 360;

    const targetRotation =
      normalizedRotation +
      fullSpins +
      finalRotation;

    setRotation(targetRotation);

    // Wait until animation finishes
    setTimeout(() => {
      setCurrentResult(result);

      setResults((prev) => [
        ...prev,
        result
      ]);

      setIsFlipping(false);
    }, 1500);
  };

  const resetSimulation = () => {
    if (isFlipping) return;

    setResults([]);
    setCurrentResult(null);
    setRotation(0);
  };

  const totalFlips = results.length;

  const heads = results.filter(
    (result) => result === "Heads"
  ).length;

  const tails = results.filter(
    (result) => result === "Tails"
  ).length;

  const getProbability = (count) => {
    if (totalFlips === 0) return "0.0";

    return (
      (count / totalFlips) * 100
    ).toFixed(1);
  };

  return (
    <main className="coin-page">
      <div className="coin-container">

        {/* Header */}
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

        {/* Simulator */}
        <section className="coin-simulator">

          <span className="coin-display-label">
            CURRENT RESULT
          </span>

          {/* 3D Coin */}
          <div className="coin-scene">
            <div
              className="coin-3d"
              style={{
                transform: `rotateY(${rotation}deg)`
              }}
            >
              {/* Heads */}
              <div className="coin-side coin-heads">
                <span>H</span>
                <small>HEADS</small>
              </div>

              {/* Tails */}
              <div className="coin-side coin-tails">
                <span>T</span>
                <small>TAILS</small>
              </div>

              {/* Coin edge */}
              <div className="coin-edge" />
            </div>
          </div>

          <h2>
            {isFlipping
              ? "Flipping..."
              : currentResult || "Ready to flip"}
          </h2>

          <button
            className="flip-button"
            onClick={flipCoin}
            disabled={isFlipping}
          >
            <FaCoins />

            {isFlipping ? "Flipping..." : "Flip Coin"}
          </button>

        </section>

        {/* Stats */}
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

        {/* Probability Results */}
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
              disabled={isFlipping}
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

        {/* Learning */}
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