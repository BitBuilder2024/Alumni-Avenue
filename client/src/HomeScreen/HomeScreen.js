import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../Components/GroupCard";
import ProfileCard from "../Components/ProfileCard";
import HeadCard from "../HeadCard/HeadCard"
import React from "react";
import './HomeScreen.css';

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

    const navigate = useNavigate();
    function CreateGroupRoute(){
        navigate('/CreateGroupRoute');
    }
    function JoinGroupRoute(){
        navigate(/*'/insert the path to join new group web page'*/);
    }

    return(
<div>
    {/* header outside bc margins */}
    <HeadCard/>
    {/* container of everything besides header */}
    <div class = "homeContainer">
        <div class = "welcomeText">Welcome, {userFirstName}!</div>
        <ProfileCard uName = {userName} uSchool = {userSchool} uJob = {userJob} uClass = {userClass} uPic = {profilePic}/>
    
        <div class = "homeGroups">
            <div class="MyGroupsText">My Groups</div>
            {/* Box for the Buttons, so they stay together */}
            <div class = "homeGroupButtons">
                <button class = "JoinGroupButton" /*onClick={JoinGroupRoute}*/>Join Group</button>
                <button class = "CreateGroupButton" onClick={CreateGroupRoute}>Create Group</button>
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
