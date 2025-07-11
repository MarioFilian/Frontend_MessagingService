const API_URL = import.meta.env.VITE_API_GATEWAY || 'http://3.231.96.33';

export async function login(username, password) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  // Asegúrate que la respuesta tiene estos campos
  if (!data.accessToken || !data.refreshToken) {
    throw new Error('Tokens missing in response');
  }

  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
}

export async function register({ username, password, email, firstName, lastName, role = 'USER' }) {
  const res = await fetch(`${API_URL}/users/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email, firstName, lastName, role }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Error en registro');
  }

  return await res.json(); // { accessToken, refreshToken }
}