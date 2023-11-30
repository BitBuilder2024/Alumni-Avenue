import React, { useState } from 'react';

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
            <div className="left-searched-group">
                <p class = "joinGroupName">{props.gName}</p>
                <img class = "joinGroupPic" src = {props.gPic} alt = "Group Picture" />
            </div>
            <div className="right-searched-group">
                <p>{props.nMem} Members</p>
            </div>
        </div>

        {/* If group is clicked */}
        {isClicked && (<div className="join-password">
            Enter password for GROUP NAME
        </div>)}
        </div>
    );
};

export default SearchedGroup