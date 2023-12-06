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

    // Sample data for groups
    const sampleGroups = [
        { id: 'group1', peopleCount: 10, groupName: 'Group One', groupPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' },
        { id: 'group2', peopleCount: 15, groupName: 'Group Two', groupPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' },
        { id: 'group3', peopleCount: 8, groupName: 'Group Three', groupPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' },
        { id: 'group4', peopleCount: 20, groupName: 'Group Four', groupPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' },
        { id: 'group5', peopleCount: 12, groupName: 'Group Five', groupPic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png' },
    ];

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

    const [users, setUsers] = useState(null)
    useEffect(()=>{
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/users');
        
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error fetching users:', errorData);
                } else {
                    const jsonData = await response.json();
                    console.log('Fetched users:', jsonData);
                    setUsers(jsonData);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, [])

    const navigate = useNavigate();
    function CreateGroupRoute(){
        navigate('/CreateGroupRoute');
    }
    function JoinGroupRoute(){
        navigate('/JoinGroup');
    }

    const handleGroupClick = (group) => {
        navigate(`/ViewGroup/${group.id}`);
    };    

    return(
<div>
    {/* header outside bc margins */}
    <HeadCard/>
    {/* container of everything besides header */}
    <div class = "homeContainer">
        <div class = "welcomeText">Welcome, {userFirstName}!</div>
        {users && users.map((users) => (
            <ProfileCard 
                uName = {users.name} 
                uSchool = {users.education} 
                uJob = {users.fieldOfWorkOrInterest} 
                uClass = {users.gradDate} 
                uPic = {users.profilePicture}/>
        ))}
        <div class = "homeGroups">
            <div class="MyGroupsText">My Groups</div>
            {/* Box for the Buttons, so they stay together */}
            <div class = "homeGroupButtons">
                <button class = "JoinGroupButton" onClick={JoinGroupRoute}>Join Group</button>
                <button class = "CreateGroupButton" onClick={CreateGroupRoute}>Create Group</button>
            </div>
        </div>
            <div className="homeGroups">
                {groups && groups.map((group) => (
                    <GroupCard
                        key={group.id}
                        nMem={group.peopleCount}
                        gPic={groupPic}
                        gName={group.groupName}
                        onClick={() => handleGroupClick(group)}
                    />
                ))}
            </div> 

        </div> 
</div>
    )
}


export default HomeScreen
