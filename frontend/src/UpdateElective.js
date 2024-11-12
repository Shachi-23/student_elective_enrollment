// import React, { useState } from 'react';
// import axios from 'axios';

// function UpdateElective() {
//     const [selectedSemester, setSelectedSemester] = useState('');
//     const [electives, setElectives] = useState([
//         [{ title: '', code: '' }],  // Elective 1
//         [{ title: '', code: '' }]   // Elective 2
//     ]);

//     const handleSemesterChange = (event) => {
//         setSelectedSemester(event.target.value);
//     };

//     const handleElectiveChange = (tableIndex, electiveIndex, event) => {
//         const { name, value } = event.target;
//         const newElectives = [...electives];
//         newElectives[tableIndex][electiveIndex][name] = value;
//         setElectives(newElectives);
//     };

//     const addElective = (tableIndex) => {
//         const newElectives = [...electives];
//         newElectives[tableIndex].push({ title: '', code: '' });
//         setElectives(newElectives);
//     };

//     const saveChanges = () => {
//         if (!selectedSemester) {
//             alert('Please select a semester.');
//             return;
//         }

//         axios.post('http://localhost:3000/saveElectives', {
//             semester: selectedSemester,
//             electives: electives
//         })
//         .then(response => {
//             console.log('Electives saved:', response.data);
//             alert('Electives have been saved successfully!');
//         })
//         .catch(error => {
//             console.error('There was an error saving the electives:', error);
//             alert('Failed to save electives.');
//         });
//     };

//     return (
//         <div>
//             <label htmlFor="electiveDropdown">Select a Semester:</label>
//             <select
//                 id="electiveDropdown"
//                 value={selectedSemester}
//                 onChange={handleSemesterChange}
//             >
//                 <option value="" disabled>Select Semester</option>
//                 <option value="Semester 5">Semester 5</option>
//                 <option value="Semester 7">Semester 7</option>
//             </select>

//             {selectedSemester && (
//                 <div>
//                     <h3>{selectedSemester} Electives</h3>
//                     {electives.map((tableElectives, tableIndex) => (
//                         <div key={tableIndex}>
//                             <h4>Elective {tableIndex + 1}</h4>
//                             <table>
//                                 <thead>
//                                     <tr>
//                                         <th>Title</th>
//                                         <th>Course Code</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {tableElectives.map((elective, electiveIndex) => (
//                                         <tr key={electiveIndex}>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="title"
//                                                     value={elective.title}
//                                                     onChange={(event) => handleElectiveChange(tableIndex, electiveIndex, event)}
//                                                     placeholder="Enter elective title"
//                                                 />
//                                             </td>
//                                             <td>
//                                                 <input
//                                                     type="text"
//                                                     name="code"
//                                                     value={elective.code}
//                                                     onChange={(event) => handleElectiveChange(tableIndex, electiveIndex, event)}
//                                                     placeholder="Enter course code"
//                                                 />
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                             <button onClick={() => addElective(tableIndex)} style={{ marginTop: '10px' }}>
//                                 Add More Electives to Elective {tableIndex + 1}
//                             </button>
//                         </div>
//                     ))}
//                     <br />
//                     <button onClick={saveChanges} style={{ marginTop: '10px' }}>Save Changes</button>
//                 </div>
//             )}
//         </div>
//     );
    
// }

// export default UpdateElective;




import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function UpdateElective() {
  const [selectedSemester, setSelectedSemester] = useState('');
  const [semesterElectives, setSemesterElectives] = useState({
    5: [
      [{ title: '', code: '' }],
      [{ title: '', code: '' }]
    ],
    7: [
      [{ title: '', code: '' }],
      [{ title: '', code: '' }]
    ]
  });

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleElectiveChange = (tableIndex, electiveIndex, event) => {
    const { name, value } = event.target;
    const newElectives = [...semesterElectives[selectedSemester]];
    newElectives[tableIndex][electiveIndex][name] = value;
    setSemesterElectives({
      ...semesterElectives,
      [selectedSemester]: newElectives
    });
  };

  const addElective = (tableIndex) => {
    const newElectives = [...semesterElectives[selectedSemester]];
    newElectives[tableIndex].push({ title: '', code: '' });
    setSemesterElectives({
      ...semesterElectives,
      [selectedSemester]: newElectives
    });
  };

  const saveChanges = () => {
    if (!selectedSemester) {
      alert('Please select a semester.');
      return;
    }
  
    const dataToSave = semesterElectives[selectedSemester].map((tableElectives, tableIndex) => {
      return tableElectives.map(elective => ({
        ...elective,
        tableIndex: tableIndex + 1  // Adding tableIndex to track which elective table it belongs to
      }));
    }).flat();
  
    console.log('Data to save:', {
      semester: selectedSemester,
      courses: dataToSave
    });
  
    axios.post('http://localhost:3000/saveCourses', {
      semester: selectedSemester,
      courses: dataToSave
    })
    .then(response => {
      console.log('Courses saved:', response.data);
      alert('Courses have been saved successfully!');
    })
    .catch(error => {
      console.error('There was an error saving the courses:', error);
      alert('Failed to save courses.');
    });
  };
  
  
  

  return (
    <div className="container mt-4">
      <label htmlFor="electiveDropdown" className="form-label">Select a Semester:</label>
      <select
        id="electiveDropdown"
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
          <h3>Semester {selectedSemester} Electives</h3>
          <div className="row">
            {semesterElectives[selectedSemester].map((tableElectives, tableIndex) => (
              <div key={tableIndex} className="col-md-6">
                <h4>Elective {tableIndex + 1}</h4>
                <table className="table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>Title</th>
                      <th>Course Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableElectives.map((elective, electiveIndex) => (
                      <tr key={electiveIndex}>
                        <td>
                          <input
                            type="text"
                            name="title"
                            value={elective.title}
                            onChange={(event) => handleElectiveChange(tableIndex, electiveIndex, event)}
                            className="form-control"
                            placeholder="Enter elective title"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="code"
                            value={elective.code}
                            onChange={(event) => handleElectiveChange(tableIndex, electiveIndex, event)}
                            className="form-control"
                            placeholder="Enter course code"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={() => addElective(tableIndex)}
                  className="btn btn-primary mt-2"
                >
                  Add More Electives to Elective {tableIndex + 1}
                </button>
              </div>
            ))}
          </div>
          <button onClick={saveChanges} className="btn btn-success mt-3">Save Changes</button>
        </div>
      )}
    </div>
  );
}

export default UpdateElective;
