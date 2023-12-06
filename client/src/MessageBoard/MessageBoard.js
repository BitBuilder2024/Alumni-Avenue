import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MessageBoard.css'; // Ensure this is the correct path to your CSS file
import HeadCard from "../HeadCard/HeadCard";

function MessageBoard() {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const memberEmail = location.state?.memberEmail || 'default@example.com';

  const handleSubmit = () => {
    console.log(`Sending email to ${memberEmail}: Subject: ${subject}, Message: ${message}`);
    navigate(-1);
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
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              className="field-input" 
              placeholder="Enter subject" 
            />
          </div>
          <div className="message-field">
            <div className="field-label">Message</div>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className="field-textarea" 
              placeholder="Write your message here"
            />
          </div>
          <button onClick={handleSubmit} className="send-button">Send Email</button>
        </div>
      </div>
    </>
  );
}

export default MessageBoard;
