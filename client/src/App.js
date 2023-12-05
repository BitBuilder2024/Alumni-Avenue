// App.js
import React from 'react';
import './App.css';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Signup from './Signup/Signup';
import Update from './Update/Update';
import HomeScreen from './HomeScreen/HomeScreen';
import CreateGroup from './CreateGroup/CreateGroup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditProfile from './EditProfile/EditProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/Components/Signup" element={<Signup />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/CreateGroupRoute" element={<CreateGroup />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default App;
