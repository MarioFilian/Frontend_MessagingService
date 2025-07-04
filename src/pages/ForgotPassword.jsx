import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí lógica para enviar email de recuperación
    setSent(true);
  };

  const handleCancel = () => {
    navigate('/'); // Regresa a la página de login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '1rem' }}>
        <h2 className="mb-4 text-center">Recuperar contraseña</h2>

        {!sent ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary flex-grow-1">
                Enviar enlace
              </button>
              <button type="button" className="btn btn-secondary flex-grow-1" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className="alert alert-success" role="alert">
            Se envió un correo con las instrucciones para restablecer tu contraseña.
            <div className="mt-3">
              <Link to="/">Volver al login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
