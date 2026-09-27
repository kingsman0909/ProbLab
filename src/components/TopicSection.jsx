import React, { useState } from "react";
import "../styles/TopicSection.css";

const topics = [
  {
    title: "Basic Probability",
    description:
      "Learn the fundamentals of probability and how to calculate the likelihood of an event.",
    formula: "P(A) = n(A) / n(S)",
    sections: [
      {
        heading: "What is Probability?",
        content:
          "Probability is the measure of how likely an event is to happen. It ranges from 0 to 1. A probability of 0 means the event is impossible, while a probability of 1 means the event is certain.",
      },
      {
        heading: "Important Terms",
        content:
          "An experiment is an action that produces an outcome. The sample space is the set of all possible outcomes. An event is a specific outcome or group of outcomes that we are interested in.",
      },
      {
        heading: "Example",
        content:
          "A fair six-sided die has six possible outcomes: 1, 2, 3, 4, 5, and 6. Only one outcome is a 3, so the probability of rolling a 3 is 1/6.",
      },
    ],
    example: "P(rolling a 3) = 1/6 ≈ 16.67%",
    keyPoints: [
      "Probability ranges from 0 to 1.",
      "All outcomes in the sample space are equally likely for a fair die.",
      "Probability is favorable outcomes divided by total possible outcomes when outcomes are equally likely.",
    ],
  },
  {
    title: "Complement Rule",
    description:
      "Calculate the probability that an event will not occur.",
    formula: "P(A') = 1 - P(A)",
    sections: [
      {
        heading: "What is the Complement Rule?",
        content:
          "The complement of an event A consists of all outcomes where A does not happen. An event and its complement cover every possible outcome, so their probabilities add up to 1.",
      },
      {
        heading: "When to Use It",
        content:
          "Use the complement rule when calculating the probability of an event not happening is easier than calculating the probability of it happening.",
      },
      {
        heading: "Example",
        content:
          "When rolling a fair six-sided die, the probability of rolling a 6 is 1/6. The probability of not rolling a 6 is the complement of that event.",
      },
    ],
    example: "P(not rolling a 6) = 1 - 1/6 = 5/6 ≈ 83.33%",
    keyPoints: [
      "An event and its complement are mutually exclusive.",
      "The sum of their probabilities is always 1.",
      "P(A') means the probability that event A does not happen.",
    ],
  },
  {
    title: "Addition Rule",
    description:
      "Find the probability that at least one of two events occurs.",
    formula: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
    sections: [
      {
        heading: "What is the Addition Rule?",
        content:
          "The addition rule calculates the probability of event A or event B occurring. The symbol ∪ represents the union of two events, meaning that at least one of them occurs.",
      },
      {
        heading: "Mutually Exclusive Events",
        content:
          "If two events cannot occur at the same time, they are mutually exclusive. Their intersection is zero, so P(A or B) = P(A) + P(B).",
      },
      {
        heading: "Example",
        content:
          "Draw one card from a standard 52-card deck. There are 13 hearts, 4 kings, and 1 card that is both a heart and a king: the king of hearts.",
      },
    ],
    example:
      "P(heart or king) = 13/52 + 4/52 - 1/52 = 16/52 ≈ 30.77%",
    keyPoints: [
      "The word OR usually indicates the addition rule.",
      "Subtract the intersection to avoid double-counting.",
      "For mutually exclusive events, the intersection is zero.",
    ],
  },
  {
    title: "Multiplication Rule",
    description:
      "Calculate the probability that two events occur together.",
    formula: "P(A ∩ B) = P(A) × P(B | A)",
    sections: [
      {
        heading: "What is the Multiplication Rule?",
        content:
          "The multiplication rule calculates the probability that both event A and event B occur. The symbol ∩ represents the intersection of two events.",
      },
      {
        heading: "Independent Events",
        content:
          "Two events are independent when the occurrence of one does not affect the probability of the other. For independent events, multiply their individual probabilities.",
      },
      {
        heading: "Example",
        content:
          "Flip a fair coin twice. The probability of getting heads on the first flip is 1/2, and the probability of getting heads on the second flip is also 1/2.",
      },
    ],
    example: "P(HH) = 1/2 × 1/2 = 1/4 = 25%",
    keyPoints: [
      "The word AND usually indicates the multiplication rule.",
      "For dependent events, use conditional probability.",
      "For independent events, multiply the individual probabilities.",
    ],
  },
  {
    title: "Conditional Probability",
    description:
      "Understand how the occurrence of one event affects another event.",
    formula: "P(A | B) = P(A ∩ B) / P(B)",
    sections: [
      {
        heading: "What is Conditional Probability?",
        content:
          "Conditional probability measures the chance of event A occurring, given that event B has already occurred. The sample space is restricted to event B.",
      },
      {
        heading: "Understanding the Formula",
        content:
          "P(A | B) is read as the probability of A given B. The numerator represents the probability that both A and B occur, while the denominator represents the probability of B.",
      },
      {
        heading: "Example",
        content:
          "A card is drawn from a standard deck. Given that the card is a face card, what is the probability that it is a king? There are 12 face cards, and 4 of them are kings.",
      },
    ],
    example: "P(king | face card) = 4/12 = 1/3 ≈ 33.33%",
    keyPoints: [
      "The given event restricts the sample space.",
      "P(B) must be greater than zero for the formula to apply.",
      "Conditional probability can be different from ordinary probability.",
    ],
  },
  {
    title: "Bayes' Theorem",
    description:
      "Update the probability of an event based on new information.",
    formula: "P(A | B) = [P(B | A) × P(A)] / P(B)",
    sections: [
      {
        heading: "What is Bayes' Theorem?",
        content:
          "Bayes' theorem calculates the probability of a cause or hypothesis after observing evidence. It combines prior probability with the likelihood of the evidence.",
      },
      {
        heading: "Understanding the Terms",
        content:
          "P(A) is the prior probability. P(B | A) is the likelihood of observing B when A is true. P(A | B) is the updated probability after observing B.",
      },
      {
        heading: "Example",
        content:
          "Suppose a disease affects 1% of a population. A test is positive for 90% of people with the disease and has a 5% false-positive rate. Bayes' theorem calculates the probability that a person actually has the disease given a positive test.",
      },
    ],
    example:
      "P(disease | positive) = (0.90 × 0.01) / [(0.90 × 0.01) + (0.05 × 0.99)] ≈ 15.38%",
    keyPoints: [
      "Bayes' theorem updates probabilities using new evidence.",
      "The prior probability represents what was known before the evidence.",
      "The posterior probability is the updated probability.",
    ],
  },
  {
    title: "Permutation & Combination",
    description:
      "Count possible arrangements and selections of objects.",
    formula:
      "Permutation: nPr = n! / (n-r)!\nCombination: nCr = n! / [r!(n-r)!]",
    sections: [
      {
        heading: "Permutation",
        content:
          "A permutation is an arrangement of objects in which order matters. Changing the order creates a different arrangement.",
      },
      {
        heading: "Combination",
        content:
          "A combination is a selection of objects in which order does not matter. Selecting A and B is the same as selecting B and A.",
      },
      {
        heading: "Example",
        content:
          "Choosing a president and vice president from 5 students is a permutation because the positions differ. Choosing 2 representatives from 5 students is a combination.",
      },
    ],
    example: "5P2 = 5 × 4 = 20 arrangements\n5C2 = 10 selections",
    keyPoints: [
      "Permutation: order matters.",
      "Combination: order does not matter.",
      "The factorial symbol (!) means multiplying all positive integers up to that number.",
    ],
  },
  {
    title: "Statistics",
    description:
      "Summarize, analyze, and interpret data using statistical measures.",
    formula: "Mean = Σx / n",
    sections: [
      {
        heading: "What is Statistics?",
        content:
          "Statistics is the study of collecting, organizing, analyzing, and interpreting data. It helps us identify patterns and make conclusions based on information.",
      },
      {
        heading: "Measures of Central Tendency",
        content:
          "The mean is the average of the values. The median is the middle value when data are arranged in order. The mode is the value that appears most frequently.",
      },
      {
        heading: "Example",
        content:
          "For the data set 2, 4, 6, 8, 10, the mean is calculated by adding all values and dividing by the number of observations.",
      },
    ],
    example: "Mean = (2 + 4 + 6 + 8 + 10) / 5 = 6",
    keyPoints: [
      "Mean is sensitive to extreme values.",
      "Median is the middle value in ordered data.",
      "Mode is the most frequently occurring value.",
    ],
  },
];

function TopicsSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const openTopic = (index) => {
    setSelectedTopic(index);

    // Scroll the lesson into view after selecting a topic
    setTimeout(() => {
      document
        .getElementById("topic-reading")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const selected = selectedTopic !== null ? topics[selectedTopic] : null;

  return (
    <section className="topics-section" id="topics">
      <div className="topics-content">
        <span className="section-label">COURSE TOPICS</span>

        <h2>
          Probability concepts,
          <span> visualized.</span>
        </h2>

        <p>
          Each laboratory connects an interactive activity with the
          probability and statistics concepts being studied. Select a
          topic below to start reading.
        </p>
      </div>

      <div className="topic-list">
        {topics.map((topic, index) => (
          <button
            type="button"
            className={`topic-item ${
              selectedTopic === index ? "active" : ""
            }`}
            key={topic.title}
            onClick={() => openTopic(index)}
            aria-expanded={selectedTopic === index}
          >
            <span className="topic-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>{topic.title}</strong>

            <span className="topic-arrow">
              {selectedTopic === index ? "−" : "+"}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <article className="topic-reading" id="topic-reading">
          <button
            type="button"
            className="close-reading"
            onClick={() => setSelectedTopic(null)}
          >
            ✕ Close lesson
          </button>

          <span className="section-label">
            LESSON {String(selectedTopic + 1).padStart(2, "0")}
          </span>

          <h2>{selected.title}</h2>

          <p className="lesson-description">{selected.description}</p>

          <div className="lesson-formula">
            <h3>Key Formula</h3>
            <pre>{selected.formula}</pre>
          </div>

          {selected.sections.map((section, index) => (
            <section
              className="lesson-section"
              key={`${selected.title}-${index}`}
            >
              <h3>{section.heading}</h3>
              <p>{section.content}</p>
            </section>
          ))}

          <div className="lesson-example">
            <h3>Example / Solution</h3>
            <pre>{selected.example}</pre>
          </div>

          <div className="lesson-keypoints">
            <h3>Key Takeaways</h3>
            <ul>
              {selected.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="lesson-navigation">
            <button
              type="button"
              disabled={selectedTopic === 0}
              onClick={() => openTopic(selectedTopic - 1)}
            >
              ← Previous
            </button>

            <span>
              {selectedTopic + 1} / {topics.length}
            </span>

            <button
              type="button"
              disabled={selectedTopic === topics.length - 1}
              onClick={() => openTopic(selectedTopic + 1)}
            >
              Next →
            </button>
          </div>
        </article>
      )}
    </section>
  );
}

export default TopicsSection;