import React from "react";
import "../styles/ChatbotIcon.css";
// import chatbotIcon from "../assets/chatbot-icon.png"; // Ensure the path to your icon is correct

const ChatbotIcon = () => {
  return (
    <div className="chatbot-icon" onClick={() => alert("Chatbot opened!")}>
      <button className="chatbot-button">💬</button>
      <div className="chatbot-icon-tooltip">Chat with us!</div>
    </div>
  );
};

export default ChatbotIcon;
