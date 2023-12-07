import React, { useState } from 'react';
import { useEffect } from "react";
import '../JoinGroup/JoinGroup.css';
import { setCurrentUserId, getCurrentUserId } from '../currentUser'
import { Link, useNavigate } from 'react-router-dom';


function SearchedGroup(props) {
    // Track if group is clicked
    const [isClicked, setIsClicked] = useState(false);

    // Handler function for group click
    const handleClick = () => {
        setIsClicked(!isClicked);
    };
    const navigate = useNavigate();
    const joinDetails = ({
        userId: getCurrentUserId(),
        groupId: props.gID
    });
    const [currGroup, setGroupDetails] = useState(null);
    useEffect(()=>{
        const fetchGroups = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/groups/' + props.gID);
        
                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('current group fetched:', errorData);
                } else {
                    const jsonData = await response.json();
                    console.log('Fetched groups:', jsonData);
                    setGroupDetails(jsonData);
                }
            } catch (error) {
                console.error('Error fetching group:', error);
            }
        }

        fetchGroups();
    }, [props.gID])

    const handleJoin = async (e) => {
        e.preventDefault();
    
        const enteredPassword = document.querySelector('.password-searchbar').value;
        if (enteredPassword === currGroup.password) {
            try {
                const response = await fetch('http://localhost:4000/api/users/joinGroup/' + getCurrentUserId() + '/' + props.gID, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(joinDetails),
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Group joined:', responseData);
    
                    // Make a PATCH request to update the group's peopleCount
                    const patchResponse = await fetch('http://localhost:4000/api/groups/' + props.gID, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            // Increment peopleCount by 1
                            peopleCount: currGroup.peopleCount + 1,
                        }),
                    });
    
                    if (patchResponse.ok) {
                        console.log('Group updated successfully');
                    
                        // Make a PATCH request to add the user ID to the group's peopleInGroup array
                        const groupAddResponse = await fetch(`http://localhost:4000/api/groups/${props.gID}/${getCurrentUserId()}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        });
                    
                        if (groupAddResponse.ok) {
                            console.log('Added to group array successfully');
                        } else {
                            console.error('Failed to add to group array:', groupAddResponse.statusText);
                        }
                    } else {
                        console.error('Failed to update group:', patchResponse.statusText);
                    }
                    
    
                    // Optionally, you can navigate to another page or perform additional actions
                    navigate('/HomeScreen');
                } else {
                    // User creation failed, handle the error
                    console.error('Failed to join group:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        } else {
            // Handle the case where the entered password does not match
            console.error('Password does not match the group password');
            // You can show an error message or take other actions as needed
        }
        console.log(joinDetails);
    };
    


    return(
        <div>
        <div className = "searched-group" onClick={handleClick}>
            <div className="components-searched-group">
                <div className="top-searched-group">
                    <div className="left-searched-group">
                        <img class = "joinGroupPic" src = {props.gPic} alt = "Group Picture" />
                        <p class = "joinGroupName">{props.gName}</p>
                    </div>
                    <div className="right-searched-group">
                        <p>{props.nMem} Members</p>
                    </div>
                </div>
                <div className="bottom-searched-group">
                    <div class = "joinGroupDescription">{props.gDescription}</div>
                </div>
            </div>
        </div>

        {isClicked && (<div className = "PasswordContainer">
            {isClicked && (<div className="password-search"><input type="text" className="password-searchbar" placeholder="Enter password"/></div>)}
            {isClicked && (<div className="enter-password"><button className="join-group-button" onClick={handleJoin}>Join Group</button></div>)}
        </div>)}
    </div>
    );
};

export default SearchedGroup
