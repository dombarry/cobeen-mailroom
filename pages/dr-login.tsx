import { useState } from 'react';

const DRLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/dr/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      // Redirect to DR Dashboard
      window.location.href = '/dr-dash';
    }
  };

  return (
    <div style={{ backgroundColor: '#C98431', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: '#FFFFFF', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', width: '400px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>DR Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', marginBottom: '0.5rem' }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '15px' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'medium', marginBottom: '0.5rem' }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', border: '1px solid #D1D5DB', borderRadius: '15px' }}
              required
            />
          </div>
          <button
            type="submit"
            style={{ width: '100%', padding: '0.75rem', backgroundColor: '#C98431', color: '#FFFFFF', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Login
          </button>
        </form>
        {message && <p style={{ marginTop: '1rem', color: '#EF4444' }}>{message}</p>}
      </div>
    </div>
  );
};

export default DRLogin;