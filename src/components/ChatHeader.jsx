import React from 'react';
import { FaCircle, FaUser } from 'react-icons/fa';

const ChatHeader = ({ chat }) => {
  const isOnline = chat.online; // booleano
  const lastSeen = chat.lastSeen || 'hace 2 horas'; // fallback

  const handleViewProfile = () => {
    // Aquí podrías redirigir o abrir modal
    alert(`Ver perfil de ${chat.name}`);
  };

  return (
    <header
      className="d-flex justify-content-between align-items-center p-3 border-bottom"
      style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
    >
      {/* Info de usuario */}
      <div>
        <h5 className="mb-0">{chat.name}</h5>
        <small className="text-white-50 d-flex align-items-center">
          <FaCircle
            className={`me-1 ${isOnline ? 'text-success' : 'text-secondary'}`}
            style={{ fontSize: '0.6rem' }}
          />
          {isOnline ? 'En línea' : `Últ. vez ${lastSeen}`}
        </small>
      </div>

      {/* Botón ver perfil */}
      <button
        className="btn btn-outline-light btn-sm d-flex align-items-center"
        onClick={handleViewProfile}
      >
        <FaUser className="me-1" />
        Ver perfil
      </button>
    </header>
  );
};

export default ChatHeader;
