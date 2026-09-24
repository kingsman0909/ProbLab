import React, { useState } from "react";
import { FaChartBar, FaArrowLeft, FaRedo } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/StatisticsLab.css";

function StatisticsLab() {
  const [data, setData] = useState("");
  const [stats, setStats] = useState(null);

  const calculate = () => {
    const values = data
      .split(",")
      .map((value) => Number(value.trim()));

    if (
      values.length === 0 ||
      values.some((value) => !Number.isFinite(value))
    ) {
      setStats(null);
      return;
    }

    const sorted = [...values].sort((a, b) => a - b);

    const sum = values.reduce((total, value) => total + value, 0);
    const mean = sum / values.length;

    const median =
      sorted.length % 2 === 0
        ? (sorted[sorted.length / 2 - 1] +
            sorted[sorted.length / 2]) /
          2
        : sorted[Math.floor(sorted.length / 2)];

    const variance =
      values.reduce(
        (total, value) => total + Math.pow(value - mean, 2),
        0
      ) / values.length;

    const standardDeviation = Math.sqrt(variance);

    setStats({
      count: values.length,
      mean,
      median,
      minimum: sorted[0],
      maximum: sorted[sorted.length - 1],
      standardDeviation
    });
  };

  const reset = () => {
    setData("");
    setStats(null);
  };

  return (
    <main className="statistics-page">
      <div className="statistics-container">

        <header className="statistics-header">
          <Link to="/" className="statistics-back">
            <FaArrowLeft />
            <span>Back to Labs</span>
          </Link>

          <div className="statistics-title">
            <div className="statistics-title-icon">
              <FaChartBar />
            </div>

            <div>
              <span className="statistics-label">
                STATISTICS
              </span>

              <h1>Statistics Lab</h1>

              <p>
                Analyze a dataset using basic statistical measures.
              </p>
            </div>
          </div>
        </header>

        <section className="statistics-card">

          <div className="statistics-input">

            <label>Dataset</label>

            <textarea
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Enter numbers separated by commas
Example: 10, 20, 30, 40, 50"
            />

            <div className="statistics-actions">
              <button
                className="statistics-calculate"
                onClick={calculate}
              >
                <FaChartBar />
                Analyze
              </button>

              <button
                className="statistics-reset"
                onClick={reset}
              >
                <FaRedo />
                Reset
              </button>
            </div>

          </div>

          <div className="statistics-result">

            <span>DATASET SIZE</span>

            <strong>
              {stats ? stats.count : "--"}
            </strong>

            <p>values analyzed</p>

          </div>

        </section>

        {stats && (
          <section className="statistics-results">

            <div className="statistics-results-header">
              <div>
                <span className="statistics-label">
                  RESULTS
                </span>

                <h2>Statistical Measures</h2>
              </div>
            </div>

            <div className="statistics-grid">

              <div className="statistics-stat">
                <span>Mean</span>
                <strong>{stats.mean.toFixed(2)}</strong>
              </div>

              <div className="statistics-stat">
                <span>Median</span>
                <strong>{stats.median.toFixed(2)}</strong>
              </div>

              <div className="statistics-stat">
                <span>Minimum</span>
                <strong>{stats.minimum}</strong>
              </div>

              <div className="statistics-stat">
                <span>Maximum</span>
                <strong>{stats.maximum}</strong>
              </div>

              <div className="statistics-stat">
                <span>Standard Deviation</span>
                <strong>
                  {stats.standardDeviation.toFixed(2)}
                </strong>
              </div>

            </div>

          </section>
        )}

        <section className="statistics-learning">

          <span className="statistics-label">
            LEARN
          </span>

          <h2>Descriptive Statistics</h2>

          <p>
            Descriptive statistics summarize and describe
            the important characteristics of a dataset.
          </p>

          <div className="statistics-formulas">

            <div>
              <strong>Mean</strong>
              <span>Σx ÷ n</span>
            </div>

            <div>
              <strong>Median</strong>
              <span>Middle value</span>
            </div>

            <div>
              <strong>Standard Deviation</strong>
              <span>Measure of data spread</span>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

export default StatisticsLab;