import React, { useState } from 'react';
import '../JoinGroup/JoinGroup.css';

function SearchedGroup(props) {
    // Track if group is clicked
    const [isClicked, setIsClicked] = useState(false);

    // Handler function for group click
    const handleClick = () => {
        setIsClicked(!isClicked);
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
            {isClicked && (<div className="enter-password"><button className="join-group-button">Join Group</button></div>)}
        </div>)}
    </div>
    );
};

export default SearchedGroup
