import React from "react";

import Header from "./Header";
import Hero from "./Hero";
import LabsSection from "./LabSection";
import TopicsSection from "./TopicSection";
import Footer from "./Footer";

import "../styles/Homepage.css";

function Homepage() {
  return (
    <main className="prob-home">

      <div className="prob-bg">
        <div className="bg-circle circle-one"></div>
        <div className="bg-circle circle-two"></div>
        <div className="bg-grid"></div>
      </div>

      <Header />

      <Hero />

      <LabsSection />

      <TopicsSection />

      <Footer />

    </main>
  );
}

export default Homepage;