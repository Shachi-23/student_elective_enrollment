import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [facultyID, setfacultyID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Make a request to the backend for login
      const response = await axios.post('http://localhost:3000/login', {
        id: facultyID,
        password: password,
        role: 'faculty'  // You can change this if login is for different roles
      });
      alert(response.data.message);
      localStorage.setItem('token', response.data.token); 
      localStorage.setItem('facultyID', facultyID); 
      // Redirect to dashboard or home page after successful login
      navigate('/faculty-main');
    } catch (error) {
      alert('Login failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="facultyID" className="form-label">FACULTY ID:</label>
          <input
            type="text"
            className="form-control"
            id="facultyID"
            value={facultyID}
            onChange={(e) => setfacultyID(e.target.value)}
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


