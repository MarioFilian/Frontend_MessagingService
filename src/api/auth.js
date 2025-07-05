const API_URL = "http://3.231.96.33/auth";

export async function login(username, password) {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const { accessToken, refreshToken } = await response.json();

    // Guardar tokens en localStorage
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return { accessToken, refreshToken };
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
}
