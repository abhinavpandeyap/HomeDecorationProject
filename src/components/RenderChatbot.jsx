import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "../Styles/Chatbot.css";
import send from '../images/send.png';
import logo from '../images/chatbot.png';

const RenderChatbot = () => {
  
  const chatBodyRef = useRef(null);
  const txtInputRef = useRef(null);
  
  useEffect(() => {
    txtInputRef.current.focus();
  }, []);

  const responseObj = {
    hello: "Hello!I am ChatBot, How can I help you ?",
    hey: "Hey!I am ChatBot, How can I help you",
    payment: "You can do payment through credit card/debit card or any UPI app",
    payments:"You can do payment through credit card/debit card or any UPI app",
    products:"You can search products through various categories",
    product:"You can search products through various categories",
    
    today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
  };

  const renderUserMessage = () => {
    const userInput = txtInputRef.current.value;
    renderMessageEle(userInput, "user");
    txtInputRef.current.value = "";
    setTimeout(() => {
      renderChatbotResponse(userInput);
      setScrollPosition();
    }, 600);
  };

  const renderChatbotResponse = (userInput) => {
    const input = userInput.toLowerCase();
    const res = getChatbotResponse(input);
    renderMessageEle(res);
  };

  const renderMessageEle = (txt, type) => {
    let className = "user-message";
    if (type !== "user") {
      className = "chatbot-message";
    }
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    messageEle.classList.add(className);
    messageEle.append(txtNode);
    chatBodyRef.current.append(messageEle);
  };

  const getChatbotResponse = (userInput) => {
    return responseObj[userInput] === undefined
      ? "Please try something else"
      : responseObj[userInput];
  };

  const setScrollPosition = () => {
    if (chatBodyRef.current.scrollHeight > 0) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="logo">
          <img src={logo} alt="cwt" />
        </div>
        <div className="title">ChatBot</div>
      </div>
      <div className="chat-body" ref={chatBodyRef}></div>
      <div className="chat-input">
        <div className="input-sec">
          <input type="text" id="txtInput" placeholder="Type here" ref={txtInputRef} autoFocus />
        </div>
        <div className="send" onClick={renderUserMessage}>
          <img src={send} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default RenderChatbot;