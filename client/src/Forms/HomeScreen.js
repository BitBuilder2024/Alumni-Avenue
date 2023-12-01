import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../GroupCard";
import ProfileCard from "../ProfileCard";
import React from "react";

function HomeScreen(){
    const [userFirstName, setUserFirstName] = useState ("INSERT FIRST NAME")
    // State Variables for the Profile Card
    const [userName, setUserName] = useState ("INSERT NAME")
    const [profilePic, setProfilePic] = useState ('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')
    const [userSchool, setUserSchool] = useState("INSERT SCHOOL")
    const [userClass, setUserClass] = useState ("INSERT CLASS")
    const [userJob, serUserJob] = useState ("JOB @ COMPANY")
    // State Variables for the Group Card
    const [groupName, setGroupName] = useState ("GROUP NAME")
    const [groupPic, setGroupPic] = useState ('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')
    const [numMembers, setNumMembers] = useState (999)

    // const navigate = useNavigate();

    return(
<div>
    {/* header outside bc margins */}
    <div  class = "homeHeader">
        <img class = "homeLogo" src = '/AlumAveLogo.png' alt = "Alumni Avenue Logo"/>
        <h1>Alumni Avenue</h1>
        <button>Profile</button>
    </div>
    {/* container of everything besides header */}
    <div class = "homeContainer">
       <div>
        <p>Welcome, {userFirstName}!</p>
       </div>
        <div class = "homeProfile">
            <h2>My Profile</h2>
            <button 
            class = "homeBtn" 
            // onclick = {() => navigate('/signup')}
            >
                Edit Profile
            </button>
        </div>
        <ProfileCard uName = {userName} uSchool = {userSchool} uJob = {userJob} uClass = {userClass} uPic = {profilePic}/>
    
        <div class = "homeGroups">
            <h2>My Groups</h2>
            {/* Box for the Buttons, so they stay together */}
            <div class = "homeGroupButtons">
                <button class = "homeBtn">Join Group</button>
                <button class = "homeBtn">Create Group</button>
            </div>
        </div>
        <div class = "homeGroups">
            <GroupCard nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
            <GroupCard nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
            <GroupCard nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
            <GroupCard nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
            <GroupCard nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
        </div>
    </div>
</div>
    )
}


export default HomeScreen