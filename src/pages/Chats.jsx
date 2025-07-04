import React, { useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // para el icono del botón, instala con: npm install react-icons

const dummyChats = [
  { id: 1, name: 'Carlos', lastMessage: '¿Cómo estás?', unread: 2 },
  { id: 2, name: 'Ana', lastMessage: 'Nos vemos mañana', unread: 0 },
  { id: 3, name: 'Luis', lastMessage: 'Ok, gracias!', unread: 1 },
];

const dummyMessages = [
  { id: 1, fromMe: false, text: 'Hola, ¿qué tal?' },
  { id: 2, fromMe: true, text: 'Bien, gracias. ¿Y tú?' },
  { id: 3, fromMe: false, text: 'Todo bien, aquí trabajando.' },
];

const Chats = () => {
  const [chats] = useState(dummyChats);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  // Scroll al final cuando se agregan mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now(), fromMe: true, text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div
    className="d-flex"
    style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        color: '#fff',
        overflow: 'hidden',
    }}
    >
      {/* Sidebar */}
      <aside
        className="bg-dark bg-opacity-75 text-white d-flex flex-column"
        style={{ width: '280px', overflowY: 'auto' }}
      >
        <div className="p-3 border-bottom border-white-25">
          <h5 className="mb-0">Chats</h5>
        </div>
        <ul className="list-group list-group-flush flex-grow-1">
          {chats.map(chat => (
            <li
              key={chat.id}
              className={`list-group-item d-flex justify-content-between align-items-center text-white ${
                activeChat.id === chat.id ? 'bg-primary bg-opacity-75' : 'bg-transparent'
              }`}
              style={{ cursor: 'pointer', border: 'none' }}
              onClick={() => setActiveChat(chat)}
            >
              <div className="text-truncate" style={{ maxWidth: '180px' }}>
                <strong>{chat.name}</strong>
                <div className="small text-white-50">{chat.lastMessage}</div>
              </div>
              {chat.unread > 0 && (
                <span className="badge bg-danger rounded-pill">{chat.unread}</span>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Chat principal */}
      <section className="d-flex flex-column flex-grow-1" style={{ height: '100vh' }}>
        {/* Header */}
        <header
          className="d-flex align-items-center p-3 border-bottom"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          <h5 className="mb-0">{activeChat.name}</h5>
        </header>

        {/* Mensajes */}
        <main
          className="flex-grow-1 p-3 overflow-auto"
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            scrollbarWidth: 'thin',
            scrollbarColor: '#ccc transparent',
          }}
        >
          {messages.length === 0 && (
            <p className="text-center text-white-50 mt-5">No hay mensajes aún.</p>
          )}

          {messages.map(msg => (
            <div
              key={msg.id}
              className={`d-flex mb-3 ${msg.fromMe ? 'justify-content-end' : 'justify-content-start'}`}
              style={{ animation: 'fadeIn 0.3s ease' }}
            >
              <div
                className={`p-3 rounded-3 shadow-sm ${
                  msg.fromMe ? 'bg-primary text-white' : 'bg-white text-dark'
                }`}
                style={{ maxWidth: '70%', wordBreak: 'break-word' }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>

        {/* Footer */}
        <footer
          className="p-3 border-top"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          <form className="d-flex" onSubmit={sendMessage}>
            <input
              type="text"
              className="form-control me-2 rounded-pill border-0 shadow-sm"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              aria-label="Mensaje"
              style={{
                outline: 'none',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white',
              }}
            />
            <button
              type="submit"
              className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '42px', height: '42px' }}
              aria-label="Enviar"
            >
              <FaPaperPlane />
            </button>
          </form>
        </footer>

      <style>{`
        /* Scrollbar para webkit */
        main::-webkit-scrollbar {
          width: 8px;
        }
        main::-webkit-scrollbar-track {
          background: transparent;
        }
        main::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,0.3);
          border-radius: 20px;
        }
        /* Animación fadeIn */
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(10px);}
          to {opacity: 1; transform: translateY(0);}
        }
      `}</style>
      </section>
    </div>
  );
};

export default Chats;
