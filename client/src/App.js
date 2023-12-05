// App.js
import React from 'react';
import './App.css';
// import SignUpForm from './Forms/SignUpForm';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Signup from './Signup/Signup';
import Update from './Update/Update';
import SignUpIn from './Forms/SignIn';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignUpForm from './Forms/SignUpForm';
import HomeScreen from './HomeScreen/HomeScreen';
import EditProfile from './EditProfile/EditProfile';


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
