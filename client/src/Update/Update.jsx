import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Update.css';
import { Link, useNavigate } from 'react-router-dom';

const Update = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get('email');

  const [userData, setUserData] = useState({
    Name: '',
    Email: email,
    Password: '',
    Image: '',
    Company: '',
    EducationLevel: '',
    GraduationYear: '',
    Major: '',
    Career: '',
    JobPosition: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:9270/userData?email=${email}`);
        setUserData(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.status);
          // Handle specific error codes, like 404 (Not Found)
          if (error.response.status === 404) {
            // Provide feedback to the user or take appropriate action
            console.log('User data not found');
          }
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
      }
    };

    fetchData();
  }, [email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleUpdate = () => {
    axios.post('http://localhost:9270/updateUserData', userData)
      .then((response) => {
        toast.info(response.data.message);
        console.log('User data updated successfully:', response.data);
        alert("User data updated successfully");
      })
      .catch((error) => {
        console.error('Error updating user data:', error);
      });
      navigate(`/`);
  };

  return (
    <div className='signup-page'>
      <div className='Cntainer '>
        <div className="form-title"><h2>ALUMNI AVENUE</h2></div>
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              id="name"
              name="Name"
              value={userData.Name}
              onChange={handleInputChange}
              placeholder="e.g John Doe"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input
              type="email"
              id="email"
              name="Email"
              value={userData.Email}
              onChange={handleInputChange}
              placeholder="e.g. Johndoe@gmail.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Your Password</label>
            <input
              type="password"
              id="password"
              name="Password"
              value={userData.Password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="image">Profile picture</label>
            <input
              type="file"
              id="image"
              name="Image"
              
              onChange={handleInputChange}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="Company"
              value={userData.Company}
              onChange={handleInputChange}
              
            />
          </div>
          {/* Additional input fields */}
          <div className="form-group">
            <label htmlFor="education-level">Highest level of Education</label>
            <input
              type="text"
              id="education-level"
              name="EducationLevel"
              value={userData.EducationLevel}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="graduation-year">Graduation year</label>
            <input
              type="text"
              id="graduation-year"
              name="GraduationYear"
              value={userData.GraduationYear}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="major">Major</label>
            <input
              type="text"
              id="major"
              name="Major"
              value={userData.Major}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="career">Career</label>
            <input
              type="text"
              id="career"
              name="Career"
              value={userData.Career}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="job-position">Job position</label>
            <input
              type="text"
              id="job-position"
              name="JobPosition"
              value={userData.JobPosition}
              onChange={handleInputChange}
            />
          </div>
          <button className='btn' style={{color:"white",backgroundColor:"blue"}} onClick={handleUpdate}>Save Changes</button>
        </div>
      </div>
  );
};

export default Update;
