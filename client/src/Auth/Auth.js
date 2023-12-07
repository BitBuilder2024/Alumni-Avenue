import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import HeadCard from "../HeadCard/HeadCard"

function Auth() {
  const [otp, setOTP] = useState("");

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = () => {
    // You can add your logic for handling the OTP submission here
    console.log("Submitted OTP:", otp);
    // Add additional logic like API calls or validation
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <label>
        <input
          type="text"
          value={otp}
          onChange={handleOTPChange}
          maxLength="6" // Assuming OTP is 6 digits
        />
      </label>
      <button onClick={handleSubmit}>Submit OTP</button>
    </div>
  );
}

export default Auth;

