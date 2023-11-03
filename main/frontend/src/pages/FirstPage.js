// Login.js

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [category, setCategory] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send user data to the backend for authentication and storage
    const userData = { category, email, password };
    try {
      const response = await axios.post('/api/login', userData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        Select Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="student">Student</option>
          <option value="university">University</option>
          <option value="organization">Organization</option>
        </select>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;