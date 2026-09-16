import React from "react";

import {
  FaDice,
  FaCoins,
  FaCalculator,
  FaChartBar,
  FaFlask,
  FaChartPie
} from "react-icons/fa";

import LabCard from "./LabCard";

const labs = [
  {
    number: "01",
    icon: <FaDice />,
    title: "Dice Simulator",
    topic: "Experimental Probability",
    description:
      "Simulate dice rolls and compare experimental probability with theoretical probability.",
    path: "/labs/dice"
  },

  {
    number: "02",
    icon: <FaCoins />,
    title: "Coin Toss",
    topic: "Basic Probability",
    description:
      "Perform repeated coin tosses and observe how experimental probability changes.",
    path: "/labs/coin"
  },

  {
    number: "03",
    icon: <FaCalculator />,
    title: "Probability Calculator",
    topic: "Probability Rules",
    description:
      "Calculate probabilities using addition, multiplication, and complement rules.",
    path: "/labs/probability"
  },

  {
    number: "04",
    icon: <FaChartPie />,
    title: "Conditional Probability",
    topic: "Conditional Probability",
    description:
      "Explore conditional and dependent events using probability calculations.",
    path: "/labs/conditional"
  },

  {
    number: "05",
    icon: <FaFlask />,
    title: "Bayes Simulator",
    topic: "Bayes' Theorem",
    description:
      "Explore how prior probability and new evidence affect posterior probability.",
    path: "/labs/bayes"
  },

  {
    number: "06",
    icon: <FaChartBar />,
    title: "Statistics Lab",
    topic: "Statistics",
    description:
      "Analyze datasets using statistical measures and visualize the results.",
    path: "/labs/statistics"
  }
];

function LabsSection() {
  return (
    <section className="labs-section" id="tools">

      <div className="section-heading">

        <div>

          <span className="section-label">
            INTERACTIVE LABS
          </span>

          <h2>
            Explore the experiments
          </h2>

        </div>

        <p>
          Choose a laboratory and start experimenting with
          probability and statistics.
        </p>

      </div>

      <div className="tools-grid">

        {labs.map((lab) => (
          <LabCard
            key={lab.number}
            number={lab.number}
            icon={lab.icon}
            title={lab.title}
            topic={lab.topic}
            description={lab.description}
            path={lab.path}
          />
        ))}

      </div>

    </section>
  );
}

export default LabsSection;