import React, { useState } from 'react';
import './Styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      alert(response.data.message);
      if (response.data.message === 'Login successful') {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('username', username);
       
        localStorage.setItem('email', response.data.email);  // Store email in local storage
        onLogin(true);
        navigate('/');
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form">
          <form className="login" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
            <button type="submit">Login</button>
          </form>
          <div className="signup-link">
            Don't have an account? <a href="/register">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
