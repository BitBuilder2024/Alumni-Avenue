import React, { useState } from 'react';
import axios from 'axios';
import ForgotPassword from './ForgotPassword';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

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

  const login = () => {
    const { Email, Password } = user;
    axios.post('http://localhost:9270/Login', user)
      .then(res => toast.info(res.data.message))
      .catch(error => {
        console.error('Login error:', error);
        toast.error('Failed to log in. Please try again.');
      });
  };

  const handleLogin = async(e) => {
    e.preventDefault();
    // You can do something with the userData object, like sending it to a server or logging it
    try {
      const response = await fetch('http://localhost:4000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        // User creation successful, you can handle the response here
        const responseData = await response.json();
        console.log('Successful Login:', responseData);
  
        // Optionally, you can navigate to another page or perform additional actions
        navigate('/HomeScreen');
      } else {
        // User creation failed, handle the error
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(user)
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
