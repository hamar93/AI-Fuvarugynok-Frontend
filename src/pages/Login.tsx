import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      setError('Hibás felhasználónév vagy jelszó.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#e9fdf1',
      fontFamily: 'sans-serif'
    }}>
      <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
      <h1>AI Fuvarügynök</h1>
      <input
        type="text"
        placeholder="Felhasználónév"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      <input
        type="password"
        placeholder="Jelszó"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: '10px', margin: '10px', width: '200px' }}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleLogin} style={{
        padding: '10px 20px',
        backgroundColor: '#007b5e',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px'
      }}>
        Belépés
      </button>
    </div>
  );
}
