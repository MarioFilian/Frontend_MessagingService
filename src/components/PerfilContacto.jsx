import React from 'react';

const PerfilContacto = ({ contacto, onClose }) => {
  return (
    <div className="container p-4" style={{ maxWidth: '480px' }}>
      <button className="btn btn-link mb-3" onClick={onClose}>
        ← Volver
      </button>

      <div className="card shadow p-4 text-center">
        {contacto.avatar ? (
          <img
            src={contacto.avatar}
            alt={contacto.name}
            className="rounded-circle mb-3"
            style={{ width: 120, height: 120, objectFit: 'cover' }}
          />
        ) : (
          <div
            className="bg-secondary rounded-circle mb-3 d-inline-block"
            style={{ width: 120, height: 120 }}
          />
        )}

        <h3>{contacto.name}</h3>
        <p className="text-muted">Estado: {contacto.isOnline ? 'Conectado' : 'Desconectado'}</p>

        <p className="small text-muted">
          Última conexión: {contacto.lastSeen ? contacto.lastSeen : 'No disponible'}
        </p>
      </div>
    </div>
  );
};

export default PerfilContacto;
