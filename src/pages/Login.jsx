import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaComments, FaUser } from 'react-icons/fa';
import { login } from '../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, refreshToken } = await login(username, password);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/chats');
    } catch (error) {
      alert('Credenciales inválidas o error de conexión');
      console.error(error);
    }
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
        {/* Título o logo */}
        <div className="text-center mb-4">
          <FaComments size={40} className="text-primary mb-2" />
          <h2 className="fw-bold text-primary mb-0">MensajeríaApp</h2>
          <p className="text-muted small">Conéctate con quien quieras</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit}>
          {/* username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Correo electrónico
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaUser />
              </span>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Contraseña
            </label>
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaLock />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control"
                id="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Botón Ingresar */}
          <button type="submit" className="btn btn-primary w-100 py-2 fw-bold">
            Ingresar
          </button>
        </form>

        {/* Links */}
        <div className="mt-3 text-center">
          <Link to="/forgot-password" className="text-decoration-none d-block mb-1">
            ¿Olvidaste tu contraseña?
          </Link>
          <span className="text-muted">¿No tienes cuenta? </span>
          <Link to="/register" className="text-decoration-none">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
