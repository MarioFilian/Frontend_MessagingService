import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUndo } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula envío del enlace de recuperación
    setSent(true);
  };

  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        color: '#fff',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem' }}
      >
        {/* Encabezado */}
        <div className="text-center mb-4">
          <FaEnvelope size={36} className="text-primary mb-2" />
          <h4 className="fw-bold text-primary mb-1">Recuperar contraseña</h4>
          <p className="text-muted small">Ingresa tu correo para enviarte un enlace</p>
        </div>

        {/* Contenido condicional */}
        {!sent ? (
          <form onSubmit={handleSubmit}>
            {/* Input correo */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Correo electrónico</label>
              <div className="input-group">
                <span className="input-group-text bg-white"><FaEnvelope /></span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="usuario@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>
            </div>

            {/* Botones */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary flex-grow-1">
                Enviar enlace
              </button>
            </div>
          </form>
        ) : (
          <div className="alert alert-success text-center" role="alert">
            Se envió un correo con instrucciones para restablecer tu contraseña.
            <div className="mt-3">
              <Link to="/" className="btn btn-outline-primary btn-sm">
                <FaUndo className="me-1" />
                Volver al login
              </Link>
            </div>
          </div>
        )}

        {/* Botón volver si no se ha enviado aún */}
        {!sent && (
          <div className="mt-3 text-center">
            <Link to="/" className="text-decoration-none text-muted small">
              ← Volver al inicio de sesión
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
