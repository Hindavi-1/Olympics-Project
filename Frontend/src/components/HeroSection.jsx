import React from "react";
import Slider from "react-slick";
import "../styles/HeroSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HeroButtons.css";

const HeroSection = () => {
  const images = [
    "/images/image1.png", // Replace with your image paths
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="hero-section">
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </Slider> */}
      <img src="/images/image1.png" className="image" />
      <div className="hero-content">
        <h1>Welcome to the Olympic Data Platform</h1>
        <p>
          Dive into Olympic history, predict medal outcomes, and explore
          interactive analytics.
        </p>
        <div className="hero-buttons">
          <button className="hero-button hero-button-primary">
            Explore Data
          </button>
          <button className="hero-button hero-button-secondary">
            Predict Medals
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
