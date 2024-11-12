import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import FacultyMain from './FacultyMain';
import FacultyMappingPage from './FacultyMappingPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/faculty-main' element={<FacultyMain/>}/>
      <Route path='/mapping' element={<FacultyMappingPage/>}/>
    </Routes>
  </Router>
);


