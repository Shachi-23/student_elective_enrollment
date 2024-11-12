import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import UserPage from './UserPage';
import Login from './Login';
import Signup from './Signup';
import StudentInfo from './StudentInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/StudentInfo' element={<StudentInfo/>}/>
      <Route path="/userpage" element={<UserPage/>} />
    </Routes>
  </Router>
);

