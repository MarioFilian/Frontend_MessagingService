import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ChatInput = ({ message, onChange, onSend }) => {
  return (
    <footer
      className="p-3 border-top"
      style={{ backgroundColor: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(6px)' }}
    >
      <form className="d-flex align-items-center gap-2" onSubmit={onSend}>
        <input
          type="text"
          className="form-control border-0 shadow-sm px-4 py-2 rounded-pill"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={onChange}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#fff',
            outline: 'none',
            boxShadow: 'inset 0 0 8px rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(4px)',
          }}
        />
        <button
          type="submit"
          className="btn btn-primary d-flex align-items-center justify-content-center shadow"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            transition: '0.2s ease',
          }}
          title="Enviar"
        >
          <FaPaperPlane size={18} />
        </button>
      </form>
    </footer>
  );
};

export default ChatInput;
