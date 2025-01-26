import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useEffect } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import "./styles/App.css";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer/Footer";
import MedalTally from "./components/MedalTally/MedalTally";
import FAQSection from "./components/FAQSection";

const App = () => {
  const [medalData, setMedalData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/medal-tally")
      .then((response) => response.json())
      .then((data) => setMedalData(data))
      .catch((error) => console.error("Error fetching medal tally:", error));
  }, []);
  // const medalData = [
  //   {
  //     country: "USA",
  //     flag: "/flags/usa.png",
  //     gold: 39,
  //     silver: 41,
  //     bronze: 33,
  //     total: 113,
  //   },
  //   {
  //     country: "China",
  //     flag: "/flags/china.png",
  //     gold: 38,
  //     silver: 32,
  //     bronze: 18,
  //     total: 88,
  //   },
  //   {
  //     country: "Japan",
  //     flag: "/flags/japan.png",
  //     gold: 27,
  //     silver: 14,
  //     bronze: 17,
  //     total: 58,
  //   },
  // ];

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <MedalTally data={medalData} />
      <FeaturesSection />
      <FAQSection />
      <ChatbotIcon />
      <Footer />
    </div>
  );
};

export default App;
