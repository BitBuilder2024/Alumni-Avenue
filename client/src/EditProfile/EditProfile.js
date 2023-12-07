import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../Components/GroupCard";
import ProfileCard from "../Components/ProfileCard";
import HeadCard from "../HeadCard/HeadCard"
import React from "react";
import './EditProfile.css';
import { Link } from 'react-router-dom';

function EditProfile(){
    // State to hold the current image URL
const [imageSrc, setImageSrc] = useState("https://www.booksie.com/files/profiles/22/mr-anonymous.png");
const openFileSelector = () => {
    document.getElementById("fileInput").click();
  };

    const navigate = useNavigate();
    function HomeRoute(){
        navigate('/HomeScreen');
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          // Create a URL for the selected file
          const fileUrl = URL.createObjectURL(file);
          setImageSrc(fileUrl); // Update the state with the new image URL
        }
      };

    return(
<div>
    {/* header outside bc margins */}
    <HeadCard/>
    <div class = "ep">
    <div class = "epCard">
        <h2 class ="epTitle" >Edit Profile</h2>
        <   div  className="choose-image-section">
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
              <button id = "epChooseImage" className="new-image-button"
                onClick={openFileSelector}
                >
                Choose Image
              </button>
              </div>
                <p>First and Last Name</p>
                <input></input>
                <p>Graduation Year</p>
                <input></input>
                <p>Major</p>
                <input></input>
                <p>Current Job Position</p>
                <input></input>
                <p>Current Company</p>
                <input></input>
            <div class = "submitBox" onClick={HomeRoute}>
                 <button class = "submitButton">Submit</button>
            </div>
    </div>
    </div>
</div>
    )
}


export default EditProfile
