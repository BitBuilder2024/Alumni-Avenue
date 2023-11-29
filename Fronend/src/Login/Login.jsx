// Login.js

import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    Email: '',
    Password: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { Email, Password } = user;
    axios.post('http://localhost:9270/Login', user)
      .then(res => toast.info(res.data.message))
      .catch(error => {
        console.error('Login error:', error);
        toast.error('Failed to log in. Please try again.');
      });
  };

  const navigate = useNavigate();

  const goUpdate = () => {
    navigate(`/update?email=${user.Email}`);
  };

  // Updated Link to navigate to the /forgotPassword route
  const goForgotPassword = () => {
    navigate('/forgotPassword');
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className='Cntainer'>
        <div className="form-title"><h2>ALUMNI AVENUE</h2></div>
        <div className="form-group">
          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            value={user.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            name="Password"
            value={user.Password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ color: "white", backgroundColor: "blue" }} onClick={goUpdate} className='btn'>Sign In</button>
        <p>
          Don't have an account?<b> <Link to="/Components/Signup" style={{ textDecoration: "none" }}>Signup</Link></b>
        </p>
      
        {/* Button to navigate to the /forgotPassword route */}
        <p>
          Forgot your password? <b><Link to="/forgotPassword" style={{ textDecoration: "none" }}>Reset it here</Link></b>
        </p>
      </div>
    </div>
  );
};

export default Login;
