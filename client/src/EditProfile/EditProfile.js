import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadCard from "../HeadCard/HeadCard";
import "./EditProfile.css";
import { setCurrentUserId, getCurrentUserId } from '../currentUser';

function EditProfile() {
  const navigate = useNavigate();

  const [imageSrc, setImageSrc] = useState(
    "https://www.booksie.com/files/profiles/22/mr-anonymous.png"
  );
  const [formData, setFormData] = useState({
    name: '',
    graduationYear: '',
    major: '',
    jobPosition: '',
    company: '',
  });

  const openFileSelector = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageSrc(fileUrl);

      // Convert the image to base64
      const base64Image = await convertToBase64(file);
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: base64Image,
      }));
    }
  };

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    const userId = getCurrentUserId();
    console.log('User ID:', userId);
    const apiUrl = `http://localhost:4000/api/users/${userId}`;
    console.log('User ID:', apiUrl);

    // Filter out empty values from formData
    const filteredData = Object.fromEntries(
      Object.entries(formData).filter(([_, value]) => value !== '')
    );

    try {
      const response = await fetch(apiUrl, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filteredData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        console.log('User updated:', updatedUser);
        navigate('/HomeScreen');
      } else {
        console.error('Update failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      {/* header outside bc margins */}
      <HeadCard />
      <div className="ep">
        <div className="epCard">
          <h2 className="epTitle">Edit Profile</h2>
          <div className="choose-image-section">
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/png, image/jpeg"
              onChange={handleFileChange}
            />
            <div className="profile-picture-container">
              <img
                loading="lazy"
                src={imageSrc}
                alt="Profile"
                className="profile-picture"
              />
            </div>
            <button
              id="epChooseImage"
              className="new-image-button"
              onClick={openFileSelector}
            >
              Choose Image
            </button>
          </div>
          <p>First and Last Name</p>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <p>Graduation Year</p>
          <input
            type="text"
            value={formData.graduationYear}
            onChange={(e) => handleInputChange(e, 'graduationYear')}
          />
          <p>Major</p>
          <input
            type="text"
            value={formData.major}
            onChange={(e) => handleInputChange(e, 'major')}
          />
          <p>Current Job Position</p>
          <input
            type="text"
            value={formData.jobPosition}
            onChange={(e) => handleInputChange(e, 'jobPosition')}
          />
          <p>Current Company</p>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange(e, 'company')}
          />
          <div className="submitBox" onClick={handleSubmit}>
            <button className="submitButton">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
