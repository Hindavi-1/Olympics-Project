import React, { useState } from "react";
import "./PredictMedal.css";

const PredictMedal = () => {
  const [inputData, setInputData] = useState({
    Age: "",
    Height: "",
    Weight: "",
    Sport_Basketball: 0,
    "Event_Basketball Men's Basketball": 0,
    Team_China: 0,
    region_China: 0,
  });
  const [predictionResult, setPredictionResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the input data to the backend for prediction
    const response = await fetch("http://localhost:5000/api/predict-medal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input_data: inputData }),
    });
    const result = await response.json();
    setPredictionResult(result);
  };

  return (
    <div className="app-container">
      <h1 className="title">Olympic Medal Prediction</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={inputData.Age}
            onChange={handleInputChange}
            placeholder="Enter Age"
          />
        </div>
        <div className="input-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="Height"
            value={inputData.Height}
            onChange={handleInputChange}
            placeholder="Enter Height"
          />
        </div>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="Weight"
            value={inputData.Weight}
            onChange={handleInputChange}
            placeholder="Enter Weight"
          />
        </div>
        <div className="input-group">
          <label>Sport (Basketball):</label>
          <input
            type="checkbox"
            name="Sport_Basketball"
            checked={inputData["Sport_Basketball"] === 1}
            onChange={(e) =>
              handleInputChange({
                target: {
                  name: "Sport_Basketball",
                  value: e.target.checked ? 1 : 0,
                },
              })
            }
          />
        </div>
        <div className="input-group">
          <label>Event (Men's Basketball):</label>
          <input
            type="checkbox"
            name="Event_Basketball Men's Basketball"
            checked={inputData["Event_Basketball Men's Basketball"] === 1}
            onChange={(e) =>
              handleInputChange({
                target: {
                  name: "Event_Basketball Men's Basketball",
                  value: e.target.checked ? 1 : 0,
                },
              })
            }
          />
        </div>
        <div className="input-group">
          <label>Team (China):</label>
          <input
            type="checkbox"
            name="Team_China"
            checked={inputData["Team_China"] === 1}
            onChange={(e) =>
              handleInputChange({
                target: { name: "Team_China", value: e.target.checked ? 1 : 0 },
              })
            }
          />
        </div>
        <div className="input-group">
          <label>Region (China):</label>
          <input
            type="checkbox"
            name="region_China"
            checked={inputData["region_China"] === 1}
            onChange={(e) =>
              handleInputChange({
                target: {
                  name: "region_China",
                  value: e.target.checked ? 1 : 0,
                },
              })
            }
          />
        </div>
        <button type="submit" className="submit-btn">
          Predict Medal
        </button>
      </form>

      {predictionResult && (
        <div className="result">
          <h2>Prediction Result:</h2>
          <p>Predicted Medal: {predictionResult.predicted_medal}</p>
          <p>Probabilities: {JSON.stringify(predictionResult.probabilities)}</p>
        </div>
      )}
    </div>
  );
};

export default PredictMedal;
