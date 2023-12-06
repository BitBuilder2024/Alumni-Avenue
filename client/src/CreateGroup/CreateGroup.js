import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './CreateGroup.css';
import HeadCard from "../HeadCard/HeadCard"

function CreateGroup() {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("https://www.booksie.com/files/profiles/22/mr-anonymous.png");
  const [groupInfo, setGroupInfo] = useState({
    groupName: '',
    peopleCount: 0,
    peopleInGroup: [],
    password: '',
    profilePicture: ''
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setGroupInfo(storedFormData);
    }
  }, []);

  const openFileSelector = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageSrc(fileUrl);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    localStorage.setItem('formData', JSON.stringify({ ...groupInfo, [name]: value }));
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    // You can do something with the userData object, like sending it to a server or logging it
    try {
      const response = await fetch('http://localhost:4000/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupInfo),
      });
  
      if (response.ok) {
        // User creation successful, you can handle the response here
        const responseData = await response.json();
        console.log('Group created:', responseData);
  
        // Optionally, you can navigate to another page or perform additional actions
        navigate('/HomeScreen');
      } else {
        // User creation failed, handle the error
        console.error('Group creation failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(groupInfo)
  };

  return (
    <>
      <HeadCard />
      <div className="below-header">
        <div className="top-buttons">
          <div className="create-new-group">Create New Group</div>
          <Link to="/HomeScreen">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>

        <div className="group-card">
          <div className="image-section">
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
                  className="profile-picture"
                  alt="Profile"
                />
              </div>
              <button className="new-image-button" onClick={openFileSelector}>
                Choose Image
              </button>
            </div>
            <div className="group-card-content">
              <div className="group-name">Group Name</div>
              <input
                type="text"
                className="group-name-text"
                placeholder="Enter text here"
                value={groupInfo.groupName}
                onChange={handleChange}
                name="groupName"
              />
              <div className="character-count">
                {groupInfo.groupName ? 50 - groupInfo.groupName.length : 50} characters left
              </div>
              <div className="group-details">Group Details</div>
              <textarea
                className="group-details-text"
                placeholder="Enter text here"
                value={groupInfo.groupDetails}
                onChange={handleChange}
                name="groupDetails"
              ></textarea>
              <div className="character-count">
                {groupInfo.groupDetails ? 500 - groupInfo.groupDetails.length : 500} characters left
              </div>
              <div className="group-password">Group Password</div>
              <input
                type="text"
                className="group-password-text"
                placeholder="Enter text here"
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <button className="create-group-button" onClick={handleFormSubmit}>
            Create Group
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
