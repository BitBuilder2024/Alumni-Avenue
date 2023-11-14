import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

function SignUpForm(){

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        education: '',
        profilePicture: '',
        graduationYear: '',
        major: '',
        career: '',
        jobPosition: '',
        company: '',
      });   

      useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData) {
            setUserData(storedData)
        }
      }, [])
  
      const handleChange = (e) => {
          const { name, value } = e.target;
          setUserData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
          localStorage.setItem('formData', JSON.stringify({...userData, [name]: value}))
        };

        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setUserData((prevData) => ({
                  ...prevData,
                  profilePicture: reader.result,
                }));
              };
              reader.readAsDataURL(file);
            }
          };
  
        const handleSubmit = (e) => {
          e.preventDefault();
          // You can do something with the userData object, like sending it to a server or logging it
          console.log(userData);
        };

        const navigate = useNavigate()

        const signIn = () =>{
            navigate('/')
        }

    return(
        <>
            <div className="container">
            <form onSubmit={handleSubmit}>
            <div className="form-title">
                    <h2>ALUMNI AVENUE</h2>
                </div>
                <div className="input-group">
                    <label>Enter your name</label>
                    <input 
                    required
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    placeholder="e.g John Doe"
                    />
                </div>
                <div className="input-group">
                    <label>Email</label>
                    <input 
                    required 
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="e.g. Johndoe@gmail.com"
                    />
                </div>
                <div className="input-group">
                    <label>Highest level of Education</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g. Bachelors degree"
                    value={userData.education}
                    onChange={handleChange}
                    name="education"
                    />
                </div>
                <div className="input-group">
                    <label>Profile picture</label>
                    <input 
                    required 
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    />
                </div>
                <div className="input-group">
                    <label>Graduation year</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g.2023"
                    value={userData.graduationYear}
                    onChange={handleChange}
                    name="graduationYear"
                    />
                </div>
                <div className="input-group">
                    <label>Major</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={userData.major}
                    onChange={handleChange}
                    name="major"
                    />
                </div>
                <div className="input-group">
                    <label>Career</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g. Software Development"
                    value={userData.career}
                    onChange={handleChange}
                    name="career"
                    />
                </div>
                <div className="input-group">
                    <label>Job position</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g. Fullstack software developer"
                    value={userData.jobPosition}
                    onChange={handleChange}
                    name="jobPosition"
                    />
                </div>
                <div className="input-group">
                    <label>Company</label>
                    <input 
                    required 
                    type="text"
                    placeholder="e.g. Google Inc."
                    value={userData.company}
                    onChange={handleChange}
                    name="company"
                    />
                </div>
                <div className="input-group">
                <button className="btn" id="signupBtn" type="submit">Sign Up</button>
                </div>
                <div className="prompt">
                  <p>Already have an account? <button onClick={signIn}>Sign In</button></p>
                </div>
            </form>
            </div>
        </>
    )
}

export default SignUpForm