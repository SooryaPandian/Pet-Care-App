import React, { useState } from 'react';
import './Styles/Register.css';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, email, password });
      alert(response.data.message);
      // Optionally redirect to login page
    } catch (error) {
      console.error('There was an error registering!', error);
    }
  };
  
  return (
    <div>
      <div className="register-body">
        <div className="register-container">
          <div className="register-form">
            <h2>Register</h2>
            <form className="register" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Name" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
              <button type="submit">Register</button>
            </form>
            <div className="signin-link">
              <span>Already have an account?</span>
              <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
