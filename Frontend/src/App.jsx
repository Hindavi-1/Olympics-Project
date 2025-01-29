import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import PredictMedal from "./components/MedalPrediction/PredictMedal";

const App = () => {
  const [medalData, setMedalData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/medal-tally")
      .then((response) => response.json())
      .then((data) => setMedalData(data))
      .catch((error) => console.error("Error fetching medal tally:", error));
  }, []);

  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/medal-predictions" element={<MedalPrediction />} />
        </Routes>
      </Router>

      {/* <HomePage medalData={medalData} /> */}
    </div>
  );
};

export default App;
