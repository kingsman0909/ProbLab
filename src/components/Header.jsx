import React from "react";
import { FaChartPie } from "react-icons/fa";

function Header() {
  return (
    <header className="prob-header">

      <div className="brand">

        <div className="brand-icon">
          <FaChartPie />
        </div>

        <span>ProbLab</span>

      </div>

      <nav>
        <a href="#home">Home</a>
        <a href="#tools">Labs</a>
        <a href="#topics">Topics</a>
      </nav>

    </header>
  );
}

export default Header;