import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { setCurrentUserId, getCurrentUserId } from '../currentUser'

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    education: '', // New field for education level
    profilePicture: '',
    graduationYear: '',
    major: '',
    career: '',
    jobPosition: '',
    company: '',
    groupsJoined: [],
    groupsOwned: []
  });

  const [postImage, setPostImage] = useState ({myFile:""})

  const handleFileUpload = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      console.log(base64);
  
      // Update the user state with the base64 value
      setUser((prevUser) => ({
        ...prevUser,
        profilePicture: base64,
      }));
  
      // Update the postImage state with the selected file
      setPostImage({
        myFile: file,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a new user object with the base64-encoded profile picture
      const userWithBase64 = {
        ...user,
        profilePicture: postImage.myFile ? await getBase64ProfilePicture(postImage.myFile) : null,
      };
  
      // You can log the userWithBase64 to see the updated object
      console.log(userWithBase64);
  
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userWithBase64),
      });
  
      if (response.ok) {
        // User creation successful, you can handle the response here
        const responseData = await response.json();
        console.log('User created:', responseData);
        setCurrentUserId(responseData._id);
  
        // Optionally, you can navigate to another page or perform additional actions
        navigate('/HomeScreen');
      } else {
        // User creation failed, handle the error
        console.error('User creation failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(user);
  };

  // Function to get base64-encoded profile picture
const getBase64ProfilePicture = async (file) => {
  return await convertToBase64(file);
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
            id="name"
            name="name"
            value={user.name}
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
            name="email"
            value={user.email}
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
            name="password"
            value={user.password}
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
            name="education"
            value={user.education}
            onChange={handleChange}
            placeholder="e.g. Bachelors degree"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="profile-picture">Profile picture </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
           
            onChange={(e) => {
              handleFileUpload(e);
              handleChange(e);
            }}
                      
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="graduation-year">Graduation year</label>
          <input
            type="text"
            id="graduation-year"
            name="graduationYear"
            value={user.graduationYear}
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
            name="major"
            value={user.major}
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
            name="career"
            value={user.career}
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
            name="jobPosition"
            value={user.jobPosition}
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
            name="company"
            value={user.company}
            onChange={handleChange}
            placeholder="e.g. Google Inc."
            required
          />
        </div>
        <button type="submit" style={{color:"white",backgroundColor:"blue"}} 
        // onClick = {handleFormSubmit}
        onClick={(e) => {
          // handleFileUpload(e);
          handleFormSubmit(e);
        }}
         className="btn">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

function convertToBase64(file){
  return new Promise ((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve (fileReader.result)
      };
      fileReader.onerror = (error) =>{
        reject (error)
      }
  })
}