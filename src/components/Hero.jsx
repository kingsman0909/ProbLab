import React from "react";
import {
  FaArrowRight,
  FaBookOpen,
  FaFlask
} from "react-icons/fa";

function Hero() {
  return (
    <section className="prob-hero" id="home">

      <div className="hero-content">

        <div className="hero-badge">
          <FaFlask />
          Interactive Probability & Statistics Lab
        </div>

        <h1>
          Learn Probability
          <span>by Experimenting.</span>
        </h1>

        <p>
          Explore probability and statistics through interactive
          simulations, calculations, and visual experiments.
        </p>

        <div className="hero-actions">

          <a href="#tools" className="primary-btn">
            Explore Labs
            <FaArrowRight />
          </a>

          <a href="#topics" className="secondary-btn">
            <FaBookOpen />
            View Topics
          </a>

        </div>

      </div>

      <div className="hero-visual">

        <div className="prob-card">

          <div className="prob-card-header">
            <span>Probability Experiment</span>

            <div className="status-dot"></div>
          </div>

          <div className="dice-area">

            <div className="dice">
              ⚄
            </div>

            <div className="experiment-info">

              <small>Rolling a die</small>

              <strong>1,000</strong>

              <span>simulations</span>

            </div>

          </div>

          <div className="prob-result">

            <div>
              <small>Experimental</small>
              <strong>16.8%</strong>
            </div>

            <div className="result-divider"></div>

            <div>
              <small>Theoretical</small>
              <strong>16.67%</strong>
            </div>

          </div>

          <div className="mini-bars">
            <span style={{ height: "35%" }}></span>
            <span style={{ height: "55%" }}></span>
            <span style={{ height: "75%" }}></span>
            <span style={{ height: "62%" }}></span>
            <span style={{ height: "90%" }}></span>
            <span style={{ height: "68%" }}></span>
            <span style={{ height: "50%" }}></span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;