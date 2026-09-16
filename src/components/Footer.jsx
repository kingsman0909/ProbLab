import React from "react";
import { FaChartPie } from "react-icons/fa";

function Footer() {
  return (
    <footer className="prob-footer">

      <div className="brand">

        <div className="brand-icon">
          <FaChartPie />
        </div>

        <span>ProbLab</span>

      </div>

      <p>
        Interactive Probability & Statistics Learning Platform
      </p>

    </footer>
  );
}

export default Footer;