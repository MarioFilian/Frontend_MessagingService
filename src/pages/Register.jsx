import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple
    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Aquí deberías enviar los datos al backend (API)
    // Simulación de registro exitoso:
    navigate('/chats');
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
        <div className="text-center mb-4">
          <FaUser size={36} className="text-primary mb-2" />
          <h4 className="fw-bold text-primary mb-1">Crear cuenta</h4>
          <p className="text-muted small">Completa tus datos para registrarte</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Nombre completo</label>
            <div className="input-group">
              <span className="input-group-text bg-white"><FaUser /></span>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Juan Pérez"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Correo */}
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
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-white"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Contraseña segura"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Confirmar contraseña */}
          <div className="mb-4">
            <label htmlFor="confirm" className="form-label fw-semibold">Confirmar contraseña</label>
            <div className="input-group">
              <span className="input-group-text bg-white"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                id="confirm"
                placeholder="Repite la contraseña"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Error */}
          {error && (
            <div className="alert alert-danger py-2 text-center">
              {error}
            </div>
          )}

          {/* Botón */}
          <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
            Registrarse
          </button>
        </form>

        <div className="mt-3 text-center">
          <span className="text-muted">¿Ya tienes una cuenta? </span>
          <Link to="/" className="text-decoration-none">Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
