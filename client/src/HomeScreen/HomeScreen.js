import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../Components/GroupCard";
import ProfileCard from "../Components/ProfileCard";
import HeadCard from "../Components/HeadCard"
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

    const [groupPic, setGroupPic] = useState ('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')

    const [groups, setGroups] = useState(null)
    useEffect(()=>{
        const fetchGroups = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/groups');
        
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error fetching groups:', errorData);
                } else {
                    const jsonData = await response.json();
                    console.log('Fetched groups:', jsonData);
                    setGroups(jsonData);
                }
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        }
        fetchGroups();
    }, [])

    // const navigate = useNavigate();

    return(
<div>
    {/* header outside bc margins */}
    <HeadCard/>
    {/* container of everything besides header */}
    <div className = "homeContainer">
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
        <div className = "homeGroups">
            {groups && groups.map((group)=>(
                <GroupCard nMem = {group.peopleCount} gPic={groupPic} gName = {group.groupName}/>
            ))}
        </div>
    </div>
</div>
    )
}


export default HomeScreen