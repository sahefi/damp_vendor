import React from 'react';
import { Search } from 'react-bootstrap-icons';

const ChatSidebar = ({ chats, activeChat, onSelectChat }) => {
  return (
    <div className="border-end d-flex flex-column bg-light" style={{ width: '320px' }}>
      <div className="p-3 border-bottom d-flex gap-2">
        <div className="d-flex align-items-center bg-white border rounded px-2 flex-grow-1">
          <Search className="text-secondary" />
          <input 
            type="text" 
            placeholder="Cari nama" 
            className="border-0 form-control form-control-sm shadow-none"
          />
        </div>
        <div style={{ width: '100px' }}>
          <select className="form-select form-select-sm">
            <option>Semua</option>
            <option>Belum Dibaca</option>
            <option>Penting</option>
          </select>
        </div>
      </div>
      
      <div className="flex-grow-1 overflow-auto">
        {chats.map(chat => (
          <div 
            key={chat.id} 
            className={`d-flex p-3 border-bottom border-light cursor-pointer ${chat.id === activeChat ? 'bg-light' : ''}`}
            onClick={() => onSelectChat(chat.id)}
            style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
          >
            <div className="me-3">
              <img 
                src={chat.avatar} 
                alt={chat.name} 
                className="rounded-circle w-100 h-100 object-fit-cover" 
              />
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h4 className="fs-6 fw-medium m-0 text-truncate">{chat.name}</h4>
                <span className="small text-secondary">{chat.timestamp}</span>
              </div>
              <p className="small text-secondary m-0 text-truncate">{chat.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;