import React, { useState } from "react";
import RenderChatbot from "./RenderChatbot";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="chatbot-container">
        {isOpen && <RenderChatbot />}
      </div>
      <button className="chatbot-toggle-button" onClick={toggleChatbot}>
        {isOpen ? "Close Chatbot" : "Open Chatbot"}
      </button>
    </div>
  );
};

export default Chatbot;
