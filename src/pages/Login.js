import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('Nesprávné přihlašovací údaje.');
      }
    } catch (error) {
      setMessage('Došlo k chybě při přihlašování.');
      console.error('Chyba:', error);
    }
  };

  return (
    <div>
      <h2>Přihlášení</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Uživatelské jméno:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Heslo:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Přihlásit se</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;