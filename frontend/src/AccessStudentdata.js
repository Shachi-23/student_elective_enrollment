import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AccessStudentdata() {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedElective, setSelectedElective] = useState('');
  const [electives, setElectives] = useState({});
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (selectedSemester) {
      console.log('Fetching electives for semester:', selectedSemester); // Log semester
      axios.get(`http://localhost:3000/getElectives/${selectedSemester}`)
        .then(response => {
          console.log('Electives fetched:', response.data); // Log fetched electives
          setElectives(response.data);
          setSelectedElective('');
        })
        .catch(error => console.error('Error fetching electives:', error));
    }
  }, [selectedSemester]);
  
  useEffect(() => {
    if (selectedElective) {
      console.log('Fetching students for semester:', selectedSemester, 'electiveType:', selectedElective); // Log selected elective
      axios
        .get(`http://localhost:3000/getStudents/${selectedSemester}/${selectedElective}`)
        .then((response) => {
          console.log('Student data fetched:', response.data); // Log student data
          setStudents(response.data);
        })
        .catch((error) => console.error('Error fetching students:', error));
    }
  }, [selectedElective]);
  

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleElectiveChange = (event) => {
    setSelectedElective(event.target.value); // Ensure this value is correct
  };

  return (
    <div className="container mt-4">
      <label htmlFor="semesterDropdown" className="form-label">Select a Semester:</label>
      <select
        id="semesterDropdown"
        value={selectedSemester}
        onChange={handleSemesterChange}
        className="form-select mb-3"
      >
        <option value="" disabled>Select Semester</option>
        <option value="5">Semester 5</option>
        <option value="7">Semester 7</option>
      </select>

      {selectedSemester && (
        <div>
          <label htmlFor="electiveDropdown" className="form-label">Select an Elective:</label>
          <select
            id="electiveDropdown"
            value={selectedElective}
            onChange={handleElectiveChange}
            className="form-select mb-3"
          >
            <option value="" disabled>Select Elective</option>
            <option value="1">Elective 1</option>
            <option value="2">Elective 2</option>
          </select>
        </div>
      )}

{students.length > 0 && (
  <div>
    <h3>Student Data for Elective {selectedElective} (Semester {selectedSemester})</h3>
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>SRN</th>
          <th>Course Title</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.srn}</td>
            <td>{student.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

    </div>
  );
}

export default AccessStudentdata;

