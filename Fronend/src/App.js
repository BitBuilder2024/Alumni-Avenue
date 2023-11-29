import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Signup from './Signup/Signup';
import Update from './Update/Update'; // Import the Update component
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/Components/Signup" element={<Signup />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default App;
