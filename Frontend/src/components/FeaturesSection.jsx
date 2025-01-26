import React from "react";
import "../styles/FeaturesSection.css";

const FeatureCards = () => {
  const cards = [
    {
      icon: "🎖",
      title: "Medal Predictions",
      description: "Predict medal winners using advanced machine learning.",
      link: "#predictions",
    },
    {
      icon: "📊",
      title: "Historical Data",
      description: "Explore Olympics history with interactive visualizations.",
      link: "#historical-data",
    },
    {
      icon: "🌎",
      title: "Country Insights",
      description: "Discover Olympic performances by countries over the years.",
      link: "#country-insights",
    },
  ];

  return (
    <div className="gradient-feature-cards">
      {cards.map((card, index) => (
        <div className="gradient-feature-card" key={index}>
          <div className="icon-wrapper">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href={card.link} className="explore-btn">
            Explore
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

// const features = [
//   {
//     title: "Medal Predictions",
//     description: "Predict medal winners using advanced machine learning.",
//     link: "#medal-predictions",
//     icon: "🏅",
//   },
//   {
//     title: "Historical Data",
//     description: "Explore Olympics history with interactive visualizations.",
//     link: "#historical-data",
//     icon: "📊",
//   },
//   {
//     title: "Country Insights",
//     description: "Analyze a country's performance in the Olympics.",
//     link: "#country-insights",
//     icon: "🌍",
//   },
// ];

// const ModernFeatureCards = () => {
//   return (
//     <div className="modern-feature-cards">
//       {features.map((feature, index) => (
//         <div key={index} className="modern-feature-card">
//           <div className="icon-wrapper">{feature.icon}</div>
//           <h3>{feature.title}</h3>
//           <p>{feature.description}</p>
//           <a href={feature.link} className="explore-btn">
//             Explore
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ModernFeatureCards;

// import React from "react";
// import "../styles/FeaturesSection.css"; // Add custom styles here

// const features = [
//   {
//     title: "Medal Predictions",
//     description: "Predict medal winners using advanced machine learning.",
//     link: "#medal-predictions",
//     icon: "🏅",
//   },
//   {
//     title: "Historical Data",
//     description: "Explore Olympics history with interactive visualizations.",
//     link: "#historical-data",
//     icon: "📊",
//   },
//   {
//     title: "Country Insights",
//     description: "Analyze a country's performance in the Olympics.",
//     link: "#country-insights",
//     icon: "🌍",
//   },
// ];

// const FeatureCards = () => {
//   return (
//     <div className="feature-cards-container">
//       {features.map((feature, index) => (
//         <div key={index} className="feature-card">
//           <div className="feature-icon">{feature.icon}</div>
//           <h3>{feature.title}</h3>
//           <p>{feature.description}</p>
//           <a href={feature.link} className="feature-link">
//             Explore
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FeatureCards;
