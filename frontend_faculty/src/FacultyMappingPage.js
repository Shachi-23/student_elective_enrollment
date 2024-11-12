import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FacultyMappingPage() {
  const [electives, setElectives] = useState([]);
  const [selectedElective, setSelectedElective] = useState(null);
  const [students, setStudents] = useState([]);

  // Fetch all elective IDs from the server
  useEffect(() => {
    axios.get('http://localhost:3000/electives')
      .then(response => {
        setElectives(response.data);
      })
      .catch(error => {
        console.error('Error fetching electives:', error);
        alert('Failed to fetch electives.');
      });
  }, []);

  // Fetch students for the selected elective
  const handleElectiveClick = (electiveID) => {
    setSelectedElective(electiveID); // Update selected elective
    axios.get(`http://localhost:3000/students/${electiveID}`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students for elective:', error);
        alert('Failed to fetch students.');
      });
  };

  return (
    <div className="container mt-4">
      <h2>Faculty Mapping Page</h2>
      <p>Select an elective to see the students who have chosen it.</p>
      
      <div className="mb-4">
        {electives.map((elective) => (
          <button 
            key={elective.electiveID} 
            className="btn btn-primary m-2"
            onClick={() => handleElectiveClick(elective.electiveID)}
          >
            {elective.electiveID}
          </button>
        ))}
      </div>

      {selectedElective && (
        <div>
          <h3>Students for Elective {selectedElective}</h3>
          {students.length > 0 ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SRN</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.srn}>
                    <td>{student.srn}</td>
                    <td>{student.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students have chosen this elective.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FacultyMappingPage;
