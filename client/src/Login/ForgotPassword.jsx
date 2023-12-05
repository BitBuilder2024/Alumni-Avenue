// ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleForgotPassword = () => {
    axios.post('http://localhost:9270/forgotPassword', { email })
      .then((response) => {
        toast.info(response.data.message);
      })
      .catch((error) => {
        console.error('Error sending reset email:', error);
        toast.error('Failed to send reset email. Please try again.');
      });
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className='Cntainer'>
      <h2>Forgot Password</h2>
      <div className="form-group">
        <label htmlFor="email">Enter your Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        </div>
        <button onClick={handleForgotPassword} style={{backgroundColor:"blue"}} className='btn'>Reset Password</button>
      </div>
      
    </div>
  );
};

export default ForgotPassword;
