import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
//import ProfileCard from "./ProfileCard";

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

    return(
<div>
    {/* header outside bc margins */}
    <div>
        <h1 class = "homeHeader">Alumni Avenue</h1>
    </div>
    {/* container of everything besides header */}
    <div class = "homeContainer">
       <div>
        <p>Welcome, {userFirstName}!</p>
       </div>
        <div class = "homeProfile">
            <p>My Profile</p>
            <button>Edit Profile</button>
        </div>
        <div class = "homeProfileCard">
        <img class = "homeProfPic" src = {profilePic} alt = "Profile Picture"/>
        {/* Profile Info */}
        <div>
            <p>{userName}</p>
            <p>{userSchool} {userClass}</p>
            <p>{userJob}</p>
        </div>
        </div>
    
        <div class = "homeGroups">
            <p>My Groups</p>
            {/* Box for the Buttons, so they stay together */}
            <div class = "homeGroupButtons">
                <button>Join Group</button>
                <button>Create Group</button>
            </div>
        </div>
        <div class = "homeGroupCard">
            <div class = "hgcLeftSide">
                <p class = "homeGroupName">{groupName}</p>
                <img class = "homeGroupPic" src = {groupPic} alt = "Group Picture"/>
            </div>
            <div class = "hgcRightSide">
                <p>{numMembers} Members</p>
                <button>- Leave Group</button>
            </div>
        </div>
    </div>
</div>
    )
}


export default HomeScreen