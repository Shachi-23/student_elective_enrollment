import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [srn, setSrn] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make a request to the backend for login
      const response = await axios.post('http://localhost:3000/login', {
        id: srn,
        password: password,
        role: 'student'  // You can change this if login is for different roles
      });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('srn', srn); 
      // Redirect to dashboard or home page after successful login
      navigate('/StudentInfo');
    } catch (error) {
      alert('Login failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="srn" className="form-label">SRN:</label>
          <input
            type="text"
            className="form-control"
            id="srn"
            value={srn}
            onChange={(e) => setSrn(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="mt-3">
        Are you new?{" "}
        <button onClick={() => navigate('/Signup')} className="btn btn-link">
          Sign up
        </button>
      </p>
    </div>
  );
}

export default Login;
