import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function LabCard({
  icon,
  title,
  description,
  topic,
  number,
  path
}) {
  return (
    <article className="tool-card">

      <div className="tool-top">
        <div className="tool-icon">
          {icon}
        </div>

        <span className="tool-number">
          {number}
        </span>
      </div>

      <div className="tool-content">
        <span className="tool-topic">
          {topic}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <Link
        to={path}
        className="tool-button"
      >
        <span>Open Lab</span>
        <FaArrowRight />
      </Link>

    </article>
  );
}

export default LabCard;