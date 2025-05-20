import React, { useState } from 'react';

import ChatSidebar from './components/ChatSidebar';
import ChatWindow from './components/ChatWindow';
import chatsData from './data/chatData';

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);
  const [chats] = useState(chatsData);

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId);
  };

  const selectedChat = activeChat ? chats.find(chat => chat.id === activeChat) : chats[0];

  return (
    <div className="d-flex flex-column" style={{ height: 'calc(100dvh - 88px)', overflow: 'hidden' }}>
      <div className="d-flex flex-grow-1 overflow-hidden border-top border-light">
        <ChatSidebar 
          chats={chats} 
          activeChat={activeChat || chats[0].id} 
          onSelectChat={handleChatSelect} 
        />
        <ChatWindow chat={selectedChat} />
      </div>
    </div>
  );
};

export default Chat;