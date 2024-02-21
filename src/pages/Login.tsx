import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../store/login/loginSlice';

const LoginPage = () => {
  const dispatch = useDispatch<any>();

  // State variables to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  // Function to handle form submission
  const handleLogin = () => {
    // Dispatch the userLogin action with the provided username and password
    dispatch(userLogin({ username, password }));
  };
  
  return (
    <div className="login-page">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
