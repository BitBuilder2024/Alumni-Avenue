import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchedGroup from './SearchedGroups'

function JoinNewGroup(){
    
    const handleSearch = (searchTerm) => {
        console.log('Searching for:', searchTerm);
    };

    // To search particular group implement later
    const [groupName, setGroupName] = useState('GROUP NAME')
    const [groupPic, setGroupPic] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png')
    const [numMembers, setNumMembers] = useState(999)

    return(
    <div>
        <div className="group-head">
            <h2>Alumni Avenue</h2>
        </div>
        <div className="join-container">
            <div><button className="back-button">Go back</button></div>
            <div className="join-title"><h3>Join New Group</h3></div>
            <div className="join-search-container">
                {/* Box that holds the search and all groups */}
                <SearchBar onSearch={handleSearch} />
                <div>
                    <SearchedGroup nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
                </div>
                {/* implement when group is clicked? */}
                <div className="join-password">
                    <button className="enter-password">Join Group</button>
                </div>            
            </div>
        </div>
    </div>
    )
}

export default JoinNewGroup