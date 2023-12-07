import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../Components/GroupCard";
import ProfileCard from "../Components/ProfileCard";
import HeadCard from "../HeadCard/HeadCard"
import React from "react";
import './EditProfile.css';

function HomeScreen(){
 
    return(
<div>
    {/* header outside bc margins */}
    <HeadCard/>
    <div class = "ep">
    <div class = "epCard">
        <h2>Edit Profile</h2>
        <div class = "epTop">
            <div class = "epLeft">
                <p>First and Last Name</p>
                <input></input>
                <p>Graduation Year</p>
                <input></input>
                <p>Current Occupation</p>
                <input></input>
                <p>Current Company</p>
                <input></input>
            </div>
            <div class = "epRight">
                <p>Major</p>
                <input></input>
            </div>
        </div>
        <div class = "epBottom">
            <div>
                <p>Additional Details/About Me</p>
                <input></input>
            </div>
            <div class = "submitBox">
                <button class = "submitButton">Submit</button>
            </div>
        </div>
    </div>
    </div>
</div>
    )
}


export default HomeScreen
