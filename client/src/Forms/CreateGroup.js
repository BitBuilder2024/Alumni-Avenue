import React, { useState } from "react";
import './App.css';

function MyComponent(props) {

// State to hold the current image URL
const [imageSrc, setImageSrc] = useState("https://www.booksie.com/files/profiles/22/mr-anonymous.png");

// Function to open file dialog
const openFileSelector = () => {
  document.getElementById("fileInput").click();
};

// Function to handle file selection
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Create a URL for the selected file
    const fileUrl = URL.createObjectURL(file);
    setImageSrc(fileUrl); // Update the state with the new image URL
  }
};

// Variables to keep track of character limit
const maxGroupNameLength = 50; // Maximum characters for the group name
const maxGroupDetailsLength = 500; // Maximum characters for the group details
const [groupName, setGroupName] = useState("");
const [groupDetails, setGroupDetails] = useState("");

const handleGroupNameChange = (event) => {
  setGroupName(event.target.value.slice(0, maxGroupNameLength));
};

// Function to handle group details change
const handleGroupDetailsChange = (event) => {
  setGroupDetails(event.target.value.slice(0, maxGroupDetailsLength));
};

  return (
    <>
        <div className="header">Alumni Avenue</div>
        <div className="below-header">
          <div className="top-buttons">
            <div className="create-new-group">Create New Group</div>
            <button className="cancel-button">Cancel</button>

          </div>
          <div className="group-card">
            <div className="image-section">
          <   div className="choose-image-section">
              {/* Hidden File Input */}
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
                />
              </div>
              <button className="new-image-button"
                onClick={openFileSelector}>
                Choose Image
              </button>
              </div>
              <div className="group-card-content">
                <div className="group-name">Group Name</div>
                <input
                  type="text"
                  className="group-name-text"
                  placeholder="Enter text here"
                  value={groupName}
                  onChange={handleGroupNameChange}
                />
                <div className="character-count">
                  {maxGroupNameLength - groupName.length} characters left
                </div>

                <div className="group-details">Group Details</div>
                <textarea
                  className="group-details-text"
                  placeholder="Enter text here"
                  value={groupDetails}
                  onChange={handleGroupDetailsChange}
                ></textarea>
                <div className="character-count">
                  {maxGroupDetailsLength - groupDetails.length} characters left
                </div>
                
                <div className="group-password">Group Password</div>
                <input type="text" className="group-password-text" placeholder="Enter text here" />
              </div>
            </div>
            <button className="create-group-button">Create Group</button>
          </div>
        </div>
    </>
  );
}

export default MyComponent;
