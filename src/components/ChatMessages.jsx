import React, { useEffect, useRef } from 'react';

const ChatMessages = ({ messages }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main
      className="flex-grow-1 p-3 overflow-auto"
      style={{
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: '100%',
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
          {/* Opción avatar si es otro usuario */}
          {!msg.fromMe && (
            <div className="me-2">
              <div
                className="rounded-circle bg-white text-primary fw-bold d-flex align-items-center justify-content-center"
                style={{
                  width: '36px',
                  height: '36px',
                  fontSize: '0.8rem',
                  boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                }}
              >
                {msg.sender?.charAt(0).toUpperCase() || 'U'}
              </div>
            </div>
          )}

          <div
            className={`p-3 rounded-4 shadow-sm ${
              msg.fromMe ? 'bg-primary text-white' : 'bg-light text-dark'
            }`}
            style={{
              maxWidth: '70%',
              wordBreak: 'break-word',
              boxShadow: msg.fromMe
                ? '0 0 10px rgba(0,123,255,0.3)'
                : '0 0 6px rgba(0,0,0,0.1)',
            }}
          >
            {msg.text}
          </div>
        </div>
      ))}

      <div ref={endRef} />

      <style>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        main::-webkit-scrollbar {
          width: 6px;
        }
        main::-webkit-scrollbar-thumb {
          background-color: rgba(255,255,255,0.3);
          border-radius: 10px;
        }
      `}</style>
    </main>
  );
};

export default ChatMessages;
