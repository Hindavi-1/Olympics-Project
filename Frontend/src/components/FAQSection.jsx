import React, { useState } from "react";
import "../styles/FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Olympic Data Platform?",
      answer:
        "The platform provides access to historical Olympic data, medal predictions, and interactive analytics.",
    },
    {
      question: "How can I predict medals for upcoming events?",
      answer:
        "Use the Medal Prediction feature to input performance metrics and view predictions based on historical data.",
    },
    {
      question: "Can I explore past Olympic data?",
      answer:
        "Yes, the Explore Data section allows you to browse and analyze historical Olympic data interactively.",
    },
    {
      question: "Is this platform free to use?",
      answer:
        "Yes, the platform is completely free and does not require any login or registration.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
