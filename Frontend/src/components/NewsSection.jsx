import React, { useEffect, useState } from "react";
import "./NewsSection.css";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from an API or local data source
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=Olympics&apiKey=YOUR_API_KEY"
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 6)); // Limit to 6 articles
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-section">
      <h2>Olympic News</h2>
      <div className="news-cards">
        {news.map((article, index) => (
          <div className="news-card" key={index}>
            <img
              src={article.urlToImage || "/placeholder.jpg"}
              alt={article.title}
              className="news-image"
            />
            <div className="news-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
