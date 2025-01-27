import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [facultyID, setfacultyID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send a request to the backend for signup
      const response = await axios.post('http://localhost:3000/signup/faculty', {
        facultyID,
        password
      });
      
      alert(response.data.message);
      navigate('/');  // Redirect back to login after successful signup
    } catch (error) {
      alert('Signup failed: ' + error.response?.data.message);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="facultyID" className="form-label">Faculty ID:</label>
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
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
