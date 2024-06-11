import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const ChatApp = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const store = useSelector(state=>state);

  useEffect(() => {
    console.log(store,"main > chatApp");
  }, [])
  
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold">Chat Room</h2>
      </div>
      <div className="p-4 h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <div className="p-2 bg-blue-500 text-white rounded-lg inline-block">
              {message}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          className="flex-1 border rounded-lg px-4 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatApp;
