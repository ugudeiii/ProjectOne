import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuyNow({ onLogin }) {
  const [creds, setCreds] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    if (creds.username === 'admin' && creds.password === '123') {
      onLogin({ username: creds.username });
      navigate('/Home');
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Log in first please.</h2>
      <span>Username:</span><br />
      <input type="text" onChange={(e) => setCreds({ ...creds, username: e.target.value })} /><br />
      <span>Password:</span><br />
      <input type="password" onChange={(e) => setCreds({ ...creds, password: e.target.value })} /><br /><br />
      <button className='button-login'
      onClick={handleLogin}>Login</button>
    </div>
  );
}

export default BuyNow;
