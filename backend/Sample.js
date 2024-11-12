// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Create a connection to the MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Shachi2374',
//   database: 'sample'
// });

// // Connect to the MySQL database
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database.');
// });

// // Add a GET route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the Electives Management API');
// });

// // Route to save electives
// app.post('/saveElectives', (req, res) => {
//   const { semester, electives } = req.body;

//   let errorOccurred = false;

//   // Iterate over the electives array and insert each one into the database
//   electives.forEach((tableElectives) => {
//     tableElectives.forEach(elective => {
//       const insertQuery = 'INSERT INTO course_table (course_title, course_code, semester) VALUES (?, ?, ?)';
//       db.query(insertQuery, [elective.title, elective.code, semester], (err, result) => {
//         if (err) {
//           console.error('Error inserting elective:', err);
//           errorOccurred = true;
//         }
//       });
//     });
//   });

//   if (errorOccurred) {
//     return res.status(500).send('Failed to save electives.');
//   }

//   res.send('Electives saved successfully.');
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });



// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // // Create a connection to the MySQL database
// const db = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'Shachi2374',
//    database: 'sample'
//  });

//  // Connect to the MySQL database
//  db.connect(err => {
//    if (err) {
//      throw err;
//    }
//    console.log('Connected to MySQL database.');
//  });

//  // Add a GET route for the root URL
//  app.get('/', (req, res) => {
//    res.send('Welcome to the Electives Management API');
//  });

//  // Route to save electives
//  // Route to save electives
// app.post('/saveElectives', (req, res) => {
//   const { semester, electives } = req.body;

//   const promises = [];

//   // Iterate over the electives array and insert each one into the database
//   electives.forEach(elective => {
//     const insertQuery = 'INSERT INTO course_table (course_title, course_code, semester, elective_table) VALUES (?, ?, ?, ?)';
//     const queryPromise = new Promise((resolve, reject) => {
//       db.query(insertQuery, [elective.title, elective.code, semester, elective.tableIndex], (err, result) => {
//         if (err) {
//           console.error('Error inserting elective:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//     promises.push(queryPromise);
//   });

//   // Wait for all insert queries to complete
//   Promise.all(promises)
//     .then(() => {
//       res.send('Electives saved successfully.');
//     })
//     .catch(() => {
//       res.status(500).send('Failed to save electives.');
//     });
// });


//  // Route to get electives by semester
//  // Route to get electives by semester
// app.get('/getElectives/:semester', (req, res) => {
//   const semester = req.params.semester;
  
//   const query = 'SELECT course_title, course_code, elective_table FROM course_table WHERE semester = ? ORDER BY elective_table, course_code';

//   db.query(query, [semester], (err, results) => {
//     if (err) {
//       console.error('Error retrieving electives:', err);
//       return res.status(500).send('Failed to retrieve electives.');
//     }

//     // Separate electives into Elective 1 and Elective 2 based on elective_table
//     const electives = {
//       1: results.filter(elective => elective.elective_table === 1),
//       2: results.filter(elective => elective.elective_table === 2)
//     };

//     res.json(electives);
//   });
// });


//  // Start the server
//  app.listen(3000, () => {
//    console.log('Server running on port 3000');
//  });






// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Shachi2374',
//   database: 'sample'
// });

// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database.');
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to the Electives Management API');
// });

// app.post('/saveElectives', (req, res) => {
//   const { srn, name, semester, electives } = req.body;

//   const promises = [];

//   electives.forEach((elective) => {
//     const insertQuery = 'INSERT INTO Elective_table (srn, name, sem, elective_number, title, code) VALUES (?, ?, ?, ?, ?, ?)';
//     const queryPromise = new Promise((resolve, reject) => {
//       db.query(insertQuery, [srn, name, semester, elective.elective, elective.title, elective.code], (err, result) => {
//         if (err) {
//           console.error('Error inserting elective:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//     promises.push(queryPromise);
//   });

//   Promise.all(promises)
//     .then(() => {
//       res.send('Electives and student information saved successfully.');
//     })
//     .catch(() => {
//       res.status(500).send('Failed to save electives.');
//     });
// });

// app.get('/getElectives/:semester', (req, res) => {
//   const semester = req.params.semester;
  
//   const query = 'SELECT course_title, course_code, elective_table FROM course_table WHERE semester = ? ORDER BY elective_table, course_code';

//   db.query(query, [semester], (err, results) => {
//     if (err) {
//       console.error('Error retrieving electives:', err);
//       return res.status(500).send('Failed to retrieve electives.');
//     }

//     const electives = {
//       1: results.filter(elective => elective.elective_table === 1),
//       2: results.filter(elective => elective.elective_table === 2)
//     };

//     res.json(electives);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });



// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Create a connection to the MySQL database
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Shachi2374',
//   database: 'sample'
// });

// // Connect to the MySQL database
// db.connect(err => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database.');
// });

// // Add a GET route for the root URL
// app.get('/', (req, res) => {
//   res.send('Welcome to the Electives Management API');
// });

// // Route to save electives along with student information to Elective_table
// app.post('/saveElectives', (req, res) => {
//   const { srn, name, semester, electives } = req.body;

//   const promises = [];

//   electives.forEach(elective => {
//     const insertQuery = 'INSERT INTO Elective_table (srn, name, sem, elective_number, title, code) VALUES (?, ?, ?, ?, ?, ?)';
//     const queryPromise = new Promise((resolve, reject) => {
//       db.query(insertQuery, [srn, name, semester, elective.elective, elective.title, elective.code], (err, result) => {
//         if (err) {
//           console.error('Error inserting elective into Elective_table:', err);
//           reject(err);
//         } else {
//           resolve(result);
//         }
//       });
//     });
//     promises.push(queryPromise);
//   });

//   // Wait for all insert queries to complete
//   Promise.all(promises)
//     .then(() => {
//       res.send('Electives and student information saved successfully.');
//     })
//     .catch(() => {
//       res.status(500).send('Failed to save electives.');
//     });
// });

// // Route to save courses to course_table
// app.post('/saveCourses', (req, res) => {
//   const { semester, courses } = req.body;

//   // Check if courses is defined and is an array
//   if (!Array.isArray(courses)) {
//     console.error('Invalid courses data:', courses);
//     return res.status(400).send('Invalid courses data.');
//   }

//   const promises = [];

//   courses.forEach(course => {
//     // Ensure each course has the required properties
//     if (course.title && course.code && course.tableIndex) {
//       const insertQuery = 'INSERT INTO course_table (course_title, course_code, semester, elective_table) VALUES (?, ?, ?, ?)';
//       const queryPromise = new Promise((resolve, reject) => {
//         db.query(insertQuery, [course.title, course.code, semester, course.tableIndex], (err, result) => {
//           if (err) {
//             console.error('Error inserting course into course_table:', err);
//             reject(err);
//           } else {
//             resolve(result);
//           }
//         });
//       });
//       promises.push(queryPromise);
//     } else {
//       console.error('Invalid course data:', course);
//     }
//   });

//   // Wait for all insert queries to complete
//   Promise.all(promises)
//     .then(() => {
//       res.send('Courses saved successfully.');
//     })
//     .catch(() => {
//       res.status(500).send('Failed to save courses.');
//     });
// });


// // Route to get electives by semester from Elective_table
//   app.get('/getElectives/:semester', (req, res) => {
//     const semester = req.params.semester;
    
//     const query = 'SELECT course_title, course_code, elective_table FROM course_table WHERE semester = ? ORDER BY elective_table, course_code';
  
//     db.query(query, [semester], (err, results) => {
//       if (err) {
//         console.error('Error retrieving electives:', err);
//         return res.status(500).send('Failed to retrieve electives.');
//       }
  
//       const electives = {
//         1: results.filter(elective => elective.elective_table === 1),
//         2: results.filter(elective => elective.elective_table === 2)
//       };
  
//       res.json(electives);
//     });
//   });
  

// // Route to get courses by semester from course_table
// app.get('/getCourses/:semester', (req, res) => {
//   const semester = req.params.semester;

//   const query = 'SELECT course_title, course_code, elective_table FROM course_table WHERE semester = ? ORDER BY elective_table, course_code';

//   db.query(query, [semester], (err, results) => {
//     if (err) {
//       console.error('Error retrieving courses from course_table:', err);
//       return res.status(500).send('Failed to retrieve courses.');
//     }

//     // Separate courses into Elective 1 and Elective 2 based on elective_table
//     const courses = {
//       1: results.filter(course => course.elective_table === 1),
//       2: results.filter(course => course.elective_table === 2)
//     };

//     res.json(courses);
//   });
// });

// // to get the student data back to admin
// app.get('/getStudents/:semester/:elective', (req, res) => {
//   const { semester, elective } = req.params;

//   const query = 'SELECT srn, name, title FROM Elective_table WHERE sem = ? AND elective_number = ?';

//   db.query(query, [semester, elective], (err, results) => {
//     if (err) {
//       console.error('Error retrieving student data:', err);
//       return res.status(500).send('Failed to retrieve student data.');
//     }

//     res.json(results);
//   });
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });




const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(cors());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shachi2374',
  database: 'electivemanagement'
});

// Connect to the MySQL database
db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database.');
});

const SECRET_KEY = '1234567890';  

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shachilhgowda@gmail.com', // Your email address
    pass: 'fluj vdrt qzok kecn'   // Your email password
  }
});


// Signup route for students
app.post('/signup/student', async (req, res) => {
  const { srn, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const query = `INSERT INTO Students (SRN, passwordHash) VALUES (?, ?)`;
  db.query(query, [srn, hashedPassword], (err) => {
    if (err) {
      console.error("Database Error:", err);  // Log the detailed error message
      return res.status(500).json({ message: 'User already exists or error in saving' });
    }
    res.json({ message: 'Signup successful' });
  });
});


// Signup route for admins
app.post('/signup/admin', async (req, res) => {
  const { adminID, password, firstName, lastName } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = `INSERT INTO Admins (adminID, passwordHash) VALUES (?, ?)`;
  db.query(query, [adminID, hashedPassword], (err) => {
    if (err) {
      return res.status(500).json({ message: 'Admin already exists or error in saving' });
    }
    res.json({ message: 'Admin signup successful' });
  });
});

// Signup route for faculty
// Signup route for faculty with duplicate check
app.post('/signup/faculty', async (req, res) => {
  const { facultyID, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Check if facultyID already exists
  const queryCheck = `SELECT facultyID FROM faculty WHERE facultyID = ?`;
  db.query(queryCheck, [facultyID], (err, results) => {
    if (err) {
      console.error("Database Error during check:", err);
      return res.status(500).json({ message: 'Error checking faculty existence' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Faculty already exists' });
    }

    // Insert new faculty if no duplicate
    const query = `INSERT INTO faculty (facultyID, passwordHash) VALUES (?, ?)`;
    db.query(query, [facultyID, hashedPassword], (err) => {
      if (err) {
        console.error("Database Error on insert:", err);
        return res.status(500).json({ message: 'Error saving faculty' });
      }
      res.json({ message: 'Faculty signup successful' });
    });
  });
});


// Login route (common for students, admins, and faculty)
app.post('/login', (req, res) => {
  const { id, password,role } = req.body;
  let query = '';
  let idField = '';

  // Set up role-based query and field name
  if (role === 'student') {
    query = `SELECT SRN AS id, passwordHash FROM Students WHERE SRN = ?`;
    idField = 'SRN';
  } else if (role === 'admin') {
    query = `SELECT adminID AS id, passwordHash FROM Admins WHERE adminID = ?`;
    idField = 'adminID';
  } else if (role === 'faculty') {
    query = `SELECT facultyID AS id, passwordHash FROM faculty WHERE facultyID = ?`;
    idField = 'facultyID';
  } else {
    return res.status(400).json({ message: 'Invalid role' });
  }

  db.query(query, [id], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign({ id: user[idField], role }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  });
});

// Update student information
app.post('/student-info', (req, res) => {
  const { srn, firstName, lastName, semester, email } = req.body;
  console.log("Received data:", req.body);

  const query = `
    UPDATE Students
    SET firstName = ?, lastName = ?, semester = ?, email = ?
    WHERE SRN = ?
  `;
  db.query(query, [firstName, lastName, semester, email, srn], (err, result) => {
    if (err) {
      console.error('Error updating student info:', err);
      return res.status(500).json({ message: 'Failed to update student information' });
    }
    res.json({ message: 'Student info updated successfully' });
  });
});


// Add a GET route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Electives Management API');
});

// Route to save electives along with student information to StudentElectiveMapping table
// Route to save electives along with student information to StudentElectiveMapping table
app.post('/saveElectives', (req, res) => {
  const { srn, electives } = req.body;

  // Check if 'electives' is defined and is an array
  if (!electives || !Array.isArray(electives)) {
    console.error('Invalid electives data:', electives);
    return res.status(400).send('Invalid electives data.');
  }

  const emailQuery = `SELECT email FROM Students WHERE SRN = ?`;
  db.query(emailQuery, [srn], (err, results) => {
    if (err || results.length === 0) {
      console.error('Error fetching student email:', err);
      return res.status(500).send('Failed to retrieve student email.');
    }

    const email = results[0].email;

    // Process each elective choice by inserting into StudentElectiveMapping
    const promises = electives.map(elective => {
      const insertQuery = `INSERT INTO StudentElectiveMapping (SRN, electiveID) VALUES (?, ?)`;
      return new Promise((resolve, reject) => {
        db.query(insertQuery, [srn, elective.code], (err, result) => {
          if (err) {
            console.error('Error inserting elective:', err);
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    });

    Promise.all(promises)
      .then(() => {
        // Send confirmation email
        const mailOptions = {
          from: 'shachilhgowda@gmail.com',
          to: email,
          subject: `Electives Confirmation`,
          text: `Dear student,\n\nYou have successfully chosen the following electives:\n Elective 1: ${electives[0]?.title} (${electives[0]?.code})Elective 2: ${electives[1]?.title} (${electives[1]?.code})\n\nThank you!`

        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Failed to send confirmation email.');
          } else {
            console.log('Email sent:', info.response);
            res.send('Student electives saved and confirmation email sent successfully.');
          }
        });
      })
      .catch(error => {
        console.error('Error saving electives:', error);
        res.status(500).send('Failed to save electives.');
      });
  });
});
// app.post('/saveElectives', (req, res) => {
//   const { srn, electives } = req.body;

//   // Ensure there are at least two electives provided
//   if (!electives || electives.length < 2) {
//     return res.status(400).send('Please provide two electives.');
//   }

//   // Extract elective codes
//   const elective1 = electives[0].code;
//   const elective2 = electives[1].code;

//   // Call the stored procedure to save electives for the student
//   // db.query('CALL SaveStudentElectives(?, ?, ?)', [srn, elective1, elective2], (err, results) => {
//   //   if (err) {
//   //     console.error('Error saving electives:', err);
//   //     return res.status(500).send('Failed to save electives.');
//   //   }

//     // After successfully saving electives, send a confirmation response
//     res.send('Electives saved successfully.');
//   });
// });



// Route to save courses to Electives table
app.post('/saveCourses', (req, res) => {
  const { semester, courses } = req.body;

  // Validate that 'courses' is defined and is an array
  if (!Array.isArray(courses)) {
    console.error('Invalid courses data:', courses);
    return res.status(400).send('Invalid courses data.');
  }

  const promises = courses.map(course => {
    // Ensure each course has the required properties
    if (course.title && course.code && course.tableIndex) {
      const insertQuery = `
        INSERT INTO Electives (electiveName, electiveID, departmentID, semester, electiveType)
        VALUES (?, ?, ?, ?, ?)
      `;
      return new Promise((resolve, reject) => {
        db.query(insertQuery, [
          course.title,
          course.code,
          course.departmentID || null,
          semester,
          course.tableIndex
        ], (err, result) => {
          if (err) {
            console.error('Error inserting course into Electives:', err);
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    } else {
      console.error('Invalid course data:', course);
      return Promise.reject('Invalid course data');
    }
  });

  // Wait for all insert queries to complete
  Promise.all(promises)
    .then(() => {
      res.send('Electives saved successfully.');
    })
    .catch(() => {
      res.status(500).send('Failed to save electives.');
    });
});

app.post('/faculty-info', (req, res) => {
  const { facultyID, firstName, lastName, email } = req.body;

  const query = `
    UPDATE faculty
    SET firstName = ?, lastName = ?, email = ?
    WHERE facultyID = ?
  `;

  db.query(query, [firstName, lastName, email, facultyID], (err, result) => {
    if (err) {
      console.error('Error updating faculty info:', err);
      return res.status(500).json({ message: 'Failed to update faculty information' });
    }
    res.json({ message: 'Faculty info updated successfully' });
  });
});

// Route to get electives by semester and elective type from Electives table
app.get('/getElectives/:semester', (req, res) => {
  const semester = req.params.semester;
  console.log('Fetching electives for semester:', semester); // Log semester

  const query = `
    SELECT electiveName AS course_title, electiveID AS course_code, electiveType
    FROM Electives
    WHERE semester = ?
    ORDER BY electiveType, electiveID
  `;

  db.query(query, [semester], (err, results) => {
    if (err) {
      console.error('Error retrieving electives:', err);
      return res.status(500).send('Failed to retrieve electives.');
    }

    console.log('Electives fetched:', results); // Log query results

    const electives = {
      1: results.filter(elective => elective.electiveType === 1),
      2: results.filter(elective => elective.electiveType === 2)
    };

    res.json(electives);
  });
});



// Route to get students by semester and elective type from StudentElectiveMapping and Electives tables
app.get('/getStudents/:semester/:electiveType', (req, res) => {
  const { semester, electiveType } = req.params;
  console.log('Fetching students for semester:', semester, 'electiveType:', electiveType); // Log parameters

  const query = `
    SELECT s.SRN AS srn, CONCAT(s.firstName, ' ', s.lastName) AS name, e.electiveName AS title
    FROM Students AS s
    JOIN StudentElectiveMapping AS sem ON s.SRN = sem.SRN
    JOIN Electives AS e ON sem.electiveID = e.electiveID
    WHERE e.semester = ? AND e.electiveType = ?
    ORDER BY s.SRN
  `;

  db.query(query, [semester, electiveType], (err, results) => {
    if (err) {
      console.error('Error retrieving student data:', err);
      return res.status(500).send('Failed to retrieve student data.');
    }

    console.log('Student data fetched:', results); // Log query results

    res.json(results);
  });
});

// Route to get all elective IDs
app.get('/electives', (req, res) => {
  const query = `SELECT electiveID FROM Electives`;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching elective IDs:', err);
      return res.status(500).send('Failed to fetch elective IDs.');
    }
    res.json(results);
  });
});

// Route to get students who have chosen a specific elective ID
app.get('/students/:electiveID', (req, res) => {
  const electiveID = req.params.electiveID;
  const query = `
    SELECT s.SRN AS srn, CONCAT(s.firstName, ' ', s.lastName) AS name
    FROM Students AS s
    JOIN StudentElectiveMapping AS sem ON s.SRN = sem.SRN
    WHERE sem.electiveID = ?
  `;

  db.query(query, [electiveID], (err, results) => {
    if (err) {
      console.error('Error fetching students for elective:', err);
      return res.status(500).send('Failed to fetch students.');
    }
    res.json(results);
  });
});


// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
