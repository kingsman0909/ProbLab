import React from "react";

const topics = [
  "Basic Probability",
  "Complement Rule",
  "Addition Rule",
  "Multiplication Rule",
  "Conditional Probability",
  "Bayes' Theorem",
  "Permutation & Combination",
  "Statistics"
];

function TopicsSection() {
  return (
    <section className="topics-section" id="topics">

      <div className="topics-content">

        <span className="section-label">
          COURSE TOPICS
        </span>

        <h2>
          Probability concepts,
          <span> visualized.</span>
        </h2>

        <p>
          Each laboratory connects an interactive activity
          with the probability and statistics concepts being studied.
        </p>

      </div>

      <div className="topic-list">

        {topics.map((topic, index) => (
          <div className="topic-item" key={topic}>

            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {topic}
            </strong>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TopicsSection;