import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MessageBoard.css'; // Ensure this is the correct path to your CSS file
import HeadCard from "../HeadCard/HeadCard";

function MessageBoard() {
  const navigate = useNavigate();
  const memberEmail = "ryanvuemail@gmail.com";

  const [details, setDetails] = useState({
    to: memberEmail,
    subject: '',
    text: ''
  })

  const handleEmailSubmit = async(e) => {
    e.preventDefault();
    // You can do something with the userData object, like sending it to a server or logging it
    try {
      const response = await fetch('http://localhost:4000/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(details),
      });
  
      if (response.ok) {
        // User creation successful, you can handle the response here
        const responseData = await response.json();
        console.log('Email sent:', responseData);
  
        // Optionally, you can navigate to another page or perform additional actions
        navigate(-1);
      } else {
        // User creation failed, handle the error
        console.error('Email failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(details)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <HeadCard />
      <div className="below-header">
        <div className="top-buttons">
          <div className="create-new-group">Send Message</div>
          <button className="cancel-button" onClick={goBack}>Cancel</button>
        </div>
        <div className="message-card">
          <div className="message-field">
            <div className="field-label">Subject</div>
            <input 
              type="text" 
              value={details.subject} 
              id='subject'
              name='subject'
              onChange={handleChange} 
              className="field-input" 
              placeholder="Enter subject" 
            />
          </div>
          <div className="message-field">
            <div className="field-label">Message</div>
            <textarea 
              value={details.text} 
              id='text'
              name='text'
              onChange={handleChange} 
              className="field-textarea" 
              placeholder="Write your message here"
            />
          </div>
          <button onClick={handleEmailSubmit} className="send-button">Send Email</button>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
