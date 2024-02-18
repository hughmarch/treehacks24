'use client';

import { useState } from 'react';
import Message from './components/Message';
import message_data from './api/messages.json';
import './globals.css';

export default function Home() {
  const [messages, setMessages] = useState(message_data);

  return (
    <div>
      <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight text-blue-600 md:text-5xl lg:text-6xls mx-auto text-center mt-4">
        MessageMinder
      </h1>
      <div className="main mb-4">
        {messages.map((message, index) => (
          <Message
            key={index}
            image={message.image}
            name={message.name}
            message={message.message}
            time={message.time}
            status={message.status}
          />
        ))}
      </div>
    </div>
  );
}
