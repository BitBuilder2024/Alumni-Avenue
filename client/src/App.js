// App.js
import React from 'react';
import './App.css';
import Login from './Login/Login';
import ForgotPassword from './Login/ForgotPassword';
import Signup from './Signup/Signup';
import Update from './Update/Update';
import HomeScreen from './HomeScreen/HomeScreen';
import CreateGroup from './CreateGroup/CreateGroup'
import EditProfile from './EditProfile/EditProfile';
import ViewGroup from './ViewGroup/ViewGroup';
import JoinGroup from './JoinGroup/JoinGroup';
import MessageBoard from './MessageBoard/MessageBoard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/Components/Signup" element={<Signup />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/CreateGroupRoute" element={<CreateGroup />} />
        <Route path = "/EditProfile" element = {<EditProfile/>} />
        <Route path="/ViewGroup" element={<ViewGroup />} />
        <Route path="/ViewGroup/:groupId" element={<ViewGroup />} />
        <Route path="/JoinGroup" element={<JoinGroup />} />
        <Route path="/message" element={<MessageBoard />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
};

export default App;
