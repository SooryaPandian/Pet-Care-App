import React, { useState, useContext } from 'react';
import { ForumContext } from './ForumContext';

const LiveChat = () => {
  const { liveChatMessages, addChatMessage } = useContext(ForumContext);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    addChatMessage(message);
    setMessage('');
  };

  return (
    <div className="live-chat">
      <h3>Live Chat</h3>
      <div className="chat-messages">
        {liveChatMessages.map((msg, index) => (
          <div key={index} className="chat-message">{msg}</div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default LiveChat;
