import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AdminUI1 from './AdminUI1';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpdateElective from './UpdateElective'; // Create this component
import AccessStudentdata from './AccessStudentdata';
import Login from './Login';
import Signup from './Signup';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/adminUI1" element={<AdminUI1 />} />
      <Route path="/update-elective" element={<UpdateElective />} />
      <Route path="/access-student-data" element={<AccessStudentdata />} />
    </Routes>
  </Router>
);

