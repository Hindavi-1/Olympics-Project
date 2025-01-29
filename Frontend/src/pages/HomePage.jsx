import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChatbotIcon from "../components/ChatbotIcon";
import "../styles/App.css";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer/Footer";
import MedalTally from "../components/MedalTally/MedalTally";
import FAQSection from "../components/FAQSection";

export default function HomePage({ medalData }) {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MedalTally data={medalData} />
      <FeaturesSection />
      <FAQSection />
      <ChatbotIcon />
      <Footer />
    </div>
  );
}
