import React, { useState } from "react";

import { ThreeDotsVertical } from "react-bootstrap-icons";

const ChatWindow = ({ chat }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  const shouldShowDay = (messages, index) => {
    if (index === 0) return true;
    if (!messages[index].day) return false;
    
    const currentDay = messages[index].day;
    const prevDay = messages[index - 1].day;
    
    return currentDay !== prevDay;
  };

  return (
    <div className="flex-grow-1 d-flex flex-column bg-light position-relative">
      {chat ? (
        <>
          <div className="d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
            <div className="d-flex align-items-center">
              <img src={chat.avatar} alt={chat.name} className="rounded-circle me-3" style={{ width: '40px', height: '40px' }} />
              <div>
                <h3 className="m-0 fs-5 fw-medium">{chat.name}</h3>
              </div>
            </div>
            <div>
              <button className="btn btn-sm border-0">
                <ThreeDotsVertical />
              </button>
            </div>
          </div>

          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column">
            {chat.messages && chat.messages.length > 0 ? (
              chat.messages.map((message, index, messages) => (
                <div key={message.id} className={`w-100 mb-3 d-flex flex-column ${message.sender === "me" ? "align-items-end" : "align-items-start"}`}>
                  {message.day && shouldShowDay(messages, index) && (
                    <div className="align-self-center bg-secondary bg-opacity-25 px-3 py-1 rounded-pill my-2 small">
                      {message.day}
                    </div>
                  )}
                  <div 
                    className={`p-3 rounded-4 position-relative ${
                      message.sender === "me" 
                        ? "text-white" 
                        : "text-dark border"
                    }`}
                    style={{ 
                      maxWidth: '70%', 
                      backgroundColor: message.sender === "me" ? "#FF7C92" : "#fff",
                      borderColor: message.sender === "me" ? "transparent" : "#e0e0e0"
                    }}
                  >
                    <div className="mb-1 small" style={{ lineHeight: 1.4 }}>{message.text}</div>
                    <div className="text-end small" style={{ fontSize: '12px' }}>{message.timestamp}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center h-100 text-secondary">
                <p>No messages yet. Start a conversation!</p>
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-top">
            <form onSubmit={handleSendMessage} className="d-flex gap-2">
              <input
                type="text"
                placeholder="Tulis pesan"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="form-control rounded-pill"
              />
              <button type="submit" className="btn rounded-pill text-white" style={{ backgroundColor: "#C5203C" }}>
                Send
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-100 text-secondary fs-5">
          <p>Select a chat to start messaging</p>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;