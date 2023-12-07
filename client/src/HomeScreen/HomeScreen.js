import { useEffect } from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import GroupCard from "../Components/GroupCard";
import ProfileCard from "../Components/ProfileCard";
import HeadCard from "../HeadCard/HeadCard"
import React from "react";
import './HomeScreen.css';
import { setCurrentUserId, getCurrentUserId } from '../currentUser'

function HomeScreen(){
    const [groupPic, setGroupPic] = useState ('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')
    const [groups, setGroups] = useState([])
    const [currUser, setCurrUser] = useState(null);
    useEffect(() => {
        const fetchCurrentUser = async () => {
          try {
            const response = await fetch('http://localhost:4000/api/users/' + getCurrentUserId());
    
            if (!response.ok) {
              const errorData = await response.json();
              console.error('Error fetching current user:', errorData);
              console.log(response);
            } else {
              const jsonData = await response.json();
              console.log('Fetched user:', jsonData);
              setCurrUser(jsonData);
            }
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        const fetchGroups = async () => {
          try {
            const response = await fetch(`http://localhost:4000/api/users/getGroups/${getCurrentUserId()}`);
    
            if (!response.ok) {
              const errorData = await response.json();
              console.error('Error fetching current user groups:', errorData);
            } else {
              const jsonData = await response.json();
              console.log('Fetched user groups:', jsonData);
    
              const groupPromises = jsonData.map(async (currGroup) => {
                try {
                  const groupResponse = await fetch(`http://localhost:4000/api/groups/${currGroup}`);
                  if (!groupResponse.ok) {
                    const errorData = await groupResponse.json();
                    console.log('Error fetching group: ', errorData);
                    return null;
                  } else {
                    const groupData = await groupResponse.json();
                    console.log('Fetched group: ', groupData);
                    return groupData;
                  }
                } catch (error) {
                  console.log('Error:', error);
                  return null;
                }
              });
    
              const resolvedGroups = await Promise.all(groupPromises);
              setGroups(resolvedGroups.filter(group => group !== null));
            }
          } catch (error) {
            console.log('Error:', error);
          }
        };
    
        fetchCurrentUser();
        fetchGroups();
      }, []);
    

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
    <div className="homeContainer">
        {currUser && (
          <div className="welcomeText">Welcome, {currUser?.name}!</div>
        )}

        {currUser && (
          <ProfileCard
            uName={currUser.name}
            uSchool={currUser.major}
            uJob={currUser.jobPosition}
            uClass={currUser.graduationYear}
            uPic={currUser.profilePicture}
          />
        )}
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
                        gPic={group.profilePicture}
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
