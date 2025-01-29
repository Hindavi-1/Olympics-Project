import React from "react";
import { motion } from "framer-motion";
import "./MedalPrediction.css";

const MedalPrediction = () => {
  return (
    <motion.div
      className="medal-prediction-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="title">Medal Predictions</h1>
      <p className="subtitle">Predict the Olympic medal winners using AI</p>

      <motion.div
        className="prediction-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <h2>Enter Country & Sport</h2>
        <input type="text" placeholder="Country" className="input-box" />
        <input type="text" placeholder="Sport" className="input-box" />
        <motion.button className="predict-button" whileHover={{ scale: 1.1 }}>
          Predict Medals
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MedalPrediction;
