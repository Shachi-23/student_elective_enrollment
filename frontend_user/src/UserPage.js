// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UserPage() {
//   const [semester, setSemester] = useState('');
//   const [electives, setElectives] = useState([]);
//   const [selectedElective, setSelectedElective] = useState(null);

//   const handleFetchElectives = () => {
//     axios.get(`http://localhost:3000/getElectives/${semester}`)
//       .then(response => {
//         setElectives(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error fetching the electives:', error);
//         alert('Failed to fetch electives.');
//       });
//   };

//   const handleElectiveChange = (event) => {
//     setSelectedElective(event.target.value);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card">
//         <div className="card-header">
//           <h1>User Page</h1>
//         </div>
//         <div className="card-body">
//           <form onSubmit={(e) => { e.preventDefault(); handleFetchElectives(); }}>
//             <div className="mb-3">
//               <label className="form-label">Name:</label>
//               <input type="text" className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">SRN:</label>
//               <input type="text" className="form-control" required />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Semester:</label>
//               <input 
//                 type="text" 
//                 className="form-control"
//                 value={semester} 
//                 onChange={(e) => setSemester(e.target.value)} 
//                 required 
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//       </div>

//       <div className="mt-5">
//         <h2>Electives for Semester {semester}:</h2>
//         <form>
//           {electives.map((elective, index) => (
//             <div key={index} className="form-check">
//               <input 
//                 className="form-check-input" 
//                 type="radio" 
//                 name="elective" 
//                 value={elective.course_code} 
//                 onChange={handleElectiveChange} 
//                 checked={selectedElective === elective.course_code}
//               />
//               <label className="form-check-label">
//                 {elective.course_title} ({elective.course_code})
//               </label>
//             </div>
//           ))}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default UserPage;


import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserPage() {
  const [semester, setSemester] = useState('');
  const [electives, setElectives] = useState({ 1: [], 2: [] });
  const [selectedElective1, setSelectedElective1] = useState(null);
  const [selectedElective2, setSelectedElective2] = useState(null);
  const [name, setName] = useState('');
  const [srn, setSrn] = useState('');

  const handleFetchElectives = () => {
    axios.get(`http://localhost:3000/getElectives/${semester}`)
      .then(response => {
        console.log('Fetched electives:', response.data);  // Log response data here
        setElectives(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the electives:', error);
        alert('Failed to fetch electives.');
      });
  };
  
  const handleElective1Change = (event) => {
    const selectedCourse = electives[1].find(e => e.course_code === event.target.value);
    setSelectedElective1(selectedCourse);
  };

  const handleElective2Change = (event) => {
    const selectedCourse = electives[2].find(e => e.course_code === event.target.value);
    setSelectedElective2(selectedCourse);
  };

  const handleSubmitElectives = () => {
    const electivesData = {
      srn,
      name,
      semester,
      electives: [
        { elective: 1, title: selectedElective1.course_title, code: selectedElective1.course_code },
        { elective: 2, title: selectedElective2.course_title, code: selectedElective2.course_code }
      ]
    };
    
    axios.post('http://localhost:3000/saveElectives', electivesData)
      .then(response => {
        alert('Electives submitted successfully!');
      })
      .catch(error => {
        console.error('There was an error submitting the electives:', error);
        alert('Failed to submit electives.');
      });
    
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>User Page</h1>
        </div>
        <div className="card-body">
          <form onSubmit={(e) => { e.preventDefault(); handleFetchElectives(); }}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input 
                type="text" 
                className="form-control" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">SRN:</label>
              <input 
                type="text" 
                className="form-control"
                value={srn}
                onChange={(e) => setSrn(e.target.value)}
                required 
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Semester:</label>
              <input 
                type="text" 
                className="form-control"
                value={semester} 
                onChange={(e) => setSemester(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary">Fetch Electives</button>
          </form>
        </div>
      </div>

      {electives[1].length > 0 && (
        <div className="mt-5">
          <h2>Elective 1 for Semester {semester}:</h2>
          <form>
            {electives[1].map((elective, index) => (
              <div key={index} className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="elective1" 
                  value={elective.course_code} 
                  onChange={handleElective1Change} 
                  checked={selectedElective1?.course_code === elective.course_code}
                />
                <label className="form-check-label">
                  {elective.course_title} ({elective.course_code})
                </label>
              </div>
            ))}
          </form>
        </div>
      )}

      {electives[2].length > 0 && (
        <div className="mt-5">
          <h2>Elective 2 for Semester {semester}:</h2>
          <form>
            {electives[2].map((elective, index) => (
              <div key={index} className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="elective2" 
                  value={elective.course_code} 
                  onChange={handleElective2Change} 
                  checked={selectedElective2?.course_code === elective.course_code}
                />
                <label className="form-check-label">
                  {elective.course_title} ({elective.course_code})
                </label>
              </div>
            ))}
          </form>
        </div>
      )}

      {(selectedElective1 && selectedElective2) && (
        <div className="mt-5">
          <button 
            className="btn btn-success"
            onClick={handleSubmitElectives}
          >
            Submit Electives
          </button>
        </div>
      )}
    </div>
  );
}

export default UserPage;
