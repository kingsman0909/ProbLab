import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import DiceSimulator from "./pages/DiceSimulator";
import CoinToss from './pages/CoinToss';
import Probability from './pages/ProbabilityCalculator'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/labs/dice"
          element={<DiceSimulator />}
        />

        <Route
          path='/labs/coin'
          element={<CoinToss />}
        />

        <Route
          path='/labs/probability'
          element={<Probability />}
        />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;