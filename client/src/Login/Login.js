import React, { useState } from 'react';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { setCurrentUserId, getCurrentUserId } from '../currentUser'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const responseData = await response.json();
  
        // Make sure to access the correct key containing userId
        const userId = responseData.user._id;
  
        // Pass the user ID to setCurrentUserId
        setCurrentUserId(userId);
  
        // Output user ID to console
        console.log('User ID has been set:', getCurrentUserId());
  
        // Optionally, you can navigate to another page or perform additional actions
        navigate('/HomeScreen');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  /*const SignInVariations = () => {
    // If logis incorrect or account doesn't exist:
    // Add implementation
    
    // If login is successful:
    // Implement user specifications later
    navigate('/HomeScreen')
  };
  /*  const goUpdate = () => {
    navigate(`/update?email=${user.Email}`);
  };*/ 

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
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Enter your Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleLogin} style={{ color: 'white', backgroundColor: 'blue' }} className="btn">Sign In</button>
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
