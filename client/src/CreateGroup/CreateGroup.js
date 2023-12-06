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

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setImageSrc(base64);

      // Update the groupInfo state with the base64 value
      setGroupInfo((prevInfo) => ({
        ...prevInfo,
        profilePicture: base64,
      }));

      localStorage.setItem('formData', JSON.stringify({ ...groupInfo, profilePicture: base64 }));
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupInfo),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Group created:', responseData);
        navigate('/HomeScreen');
      } else {
        console.error('Group creation failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(groupInfo);
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

async function convertToBase64(file) {
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
