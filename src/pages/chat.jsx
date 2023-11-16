import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';


const ChatMessage = ({ message, isUserMessage }) => {
  const backgroundColor = isUserMessage ? '#ddd' : '#999999'; // Cambia estos colores según tus preferencias

  return (
    <div
      style={{
        margin: '5px',
        padding: '10px',
        backgroundColor,
        borderRadius: '5px',
        
        alignSelf: isUserMessage ? 'flex-end' : 'flex-start',
        color: isUserMessage ? '#000' : '#000', // Cambia el color del texto según tus preferencias
      }}
    >
      {message}
    </div>
  );
};

const ChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message, true); // El segundo parámetro indica si es un mensaje del usuario
      setMessage('');
    }
  };

  return (
    <div style={{ marginTop: '10px', display: 'flex'}}>
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type your message..."
        style={{ flex: '1', marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleSendMessage} style={{ padding: '5px' }}>
        Send
      </button>
    </div>
  );
};

const ChatApp = () => {
  const [userName, setUserName] = useState('Sebastián Gutiérrez');
  const [messages, setMessages] = useState([
    { text: 'Hola, estoy afuera.', isUserMessage: false },
    { text: '¡Hola! Le abro enseguida.', isUserMessage: true },
  ]);

  const sendMessage = (messageText, isUserMessage) => {
    const newMessage = { text: messageText, isUserMessage };
    setMessages([...messages, newMessage]);
  };

  const handleClick = () => {
    history.push('/searchservJardinero');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '300px'}}>
      <Button color= "inherit" variant="contained" onClick={handleClick} href="searchservJardinero">
        Volver
      </Button>
      <h2>{userName}</h2>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto'}}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUserMessage={msg.isUserMessage} />
        ))}
      </div>
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatApp;
