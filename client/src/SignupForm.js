import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here handle form submission, e.g., send the data to a server or perform validation.
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="education">Education</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="graduationYear">Graduation Year</label>
          <input
            type="text"
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="major">Major</label>
          <input
            type="text"
            id="major"
            name="major"
            value={formData.major}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="career">Career</label>
          <input
            type="text"
            id="career"
            name="career"
            value={formData.career}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="jobPosition">Job Position</label>
          <input
            type="text"
            id="jobPosition"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
