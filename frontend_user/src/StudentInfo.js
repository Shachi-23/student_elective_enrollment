import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [semester, setSemester] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const srn = localStorage.getItem('srn');
    if (!srn) {
      alert('SRN not found. Please log in again.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/student-info', {
        srn,
        firstName,
        lastName,
        semester,
        email,
      });
      alert(response.data.message);

      // Redirect to UserPage upon successful submission
      navigate('/userpage');
    } catch (error) {
      console.error('Error updating student info:', error);
      alert('Failed to update info.');
    }
  };

  return (
    <div className="container">
      <h2>Enter Student Information</h2>
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
          <label htmlFor="semester" className="form-label">Semester:</label>
          <input
            type="text"
            className="form-control"
            id="semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
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

export default StudentInfo;
