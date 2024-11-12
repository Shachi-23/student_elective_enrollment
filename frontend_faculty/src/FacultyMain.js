import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FacultyMain() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve facultyID from localStorage, set during login
    const facultyID = localStorage.getItem('facultyID');
    if (!facultyID) {
      alert('Faculty ID not found. Please log in again.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/faculty-info', {
        facultyID,
        firstName,
        lastName,
        email
      });
      alert(response.data.message);

      // Redirect to the mapping page upon successful submission
      navigate('/mapping');
    } catch (error) {
      console.error('Error updating faculty info:', error);
      alert('Failed to update faculty info.');
    }
  };

  return (
    <div className="container">
      <h2>Enter Faculty Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FacultyMain;
