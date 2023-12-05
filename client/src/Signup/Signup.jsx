import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Password: '',
    confirmPassword: '',
    EducationLevel: '', // New field for education level
    Image: '',
    GraduationYear: '',
    Major: '',
    Career: '',
    JobPosition: '',
    Company: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { Name, Email, Password, confirmPassword, EducationLevel, Image, GraduationYear, Major, Career, JobPosition, Company } = user;
    if (Name && Email && Password && confirmPassword && Password === confirmPassword) {
      const userData = {
        Name,
        Email,
        Password,
        EducationLevel,
        Image,
        GraduationYear,
        Major,
        Career,
        JobPosition,
        Company,
      };

      axios.post('http://localhost:9270/Signup', userData)
        .then((res) => {
          console.log(res);
          alert('Account created');
          navigate('/');
          //toast.success("Account Created Successfully");
        })
        .catch((error) => {
          console.error('Error creating account:', error);
          toast.error('Error creating account');
        });
    } else {
      toast.error('Invalid');
    }
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className="Cntainer">
      <div className="form-title"><h2>ALUMNI AVENUE</h2></div>
        <div className="form-group">
          <label htmlFor="Name">Enter Your Name</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={user.Name}
            onChange={handleChange}
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
            value={user.Email}
            onChange={handleChange}
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
            value={user.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            value={user.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {/* New input fields */}
        <div className="form-group">
          <label htmlFor="education-level">Highest level of Education</label>
          <input
            type="text"
            id="education-level"
            name="EducationLevel"
            value={user.EducationLevel}
            onChange={handleChange}
            placeholder="e.g. Bachelors degree"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile-picture">Profile picture </label>
          <input
            type="file"
            id="profile-picture"
            name="Image"
            accept="image/*"
           
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="graduation-year">Graduation year</label>
          <input
            type="text"
            id="graduation-year"
            name="GraduationYear"
            value={user.GraduationYear}
            onChange={handleChange}
            placeholder="e.g.2023"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            name="Major"
            value={user.Major}
            onChange={handleChange}
            placeholder="e.g. Computer Science"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="career">Career</label>
          <input
            type="text"
            id="career"
            name="Career"
            value={user.Career}
            onChange={handleChange}
            placeholder="e.g. Software Development"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-position">Job position</label>
          <input
            type="text"
            id="job-position"
            name="JobPosition"
            value={user.JobPosition}
            onChange={handleChange}
            placeholder="e.g. Fullstack software developer"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="Company"
            value={user.Company}
            onChange={handleChange}
            placeholder="e.g. Google Inc."
            required
          />
        </div>
        <button type="submit" style={{color:"white",backgroundColor:"blue"}} onClick={register} className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
