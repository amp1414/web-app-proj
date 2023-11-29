import React, { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import navBar from '../../navbar';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/signin', {
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <navBar></navBar>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};
document.addEventListener('DOMContentLoaded', function() {
  handleLogin(); 
});
export default LoginPage;
