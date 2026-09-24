import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import DiceSimulator from "./pages/DiceSimulator";
import CoinToss from './pages/CoinToss';
import Probability from './pages/ProbabilityCalculator'
import Conditional from './pages/ConditionalProbability';
import Bayes from './pages/BayesSimulator';
import Statistics from './pages/StatisticsLab';

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

        <Route
          path='/labs/conditional'
          element={<Conditional />}
        />

        <Route
          path='/labs/bayes'
          element={<Bayes />}
        />

        <Route
          path='/labs/statistics'
          element={<Statistics />}
        />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;