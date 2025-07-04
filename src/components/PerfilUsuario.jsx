import React from 'react';

const PerfilUsuario = ({ user, onClose }) => {
  return (
    <div className="container p-4" style={{ maxWidth: '480px' }}>
      <button className="btn btn-link mb-3" onClick={onClose}>
        ← Volver
      </button>

      <div className="card shadow p-4 text-center">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-circle mb-3"
            style={{ width: 120, height: 120, objectFit: 'cover' }}
          />
        ) : (
          <div
            className="bg-secondary rounded-circle mb-3 d-inline-block"
            style={{ width: 120, height: 120 }}
          />
        )}

        <h3>{user.name}</h3>
        <p className="text-muted">{user.email}</p>

        {/* Aquí podrías agregar un formulario para editar info */}
        <button className="btn btn-primary mt-3">Editar perfil</button>
      </div>
    </div>
  );
};

export default PerfilUsuario;
