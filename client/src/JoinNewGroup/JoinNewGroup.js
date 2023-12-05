import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SearchedGroup from '../Components/SearchedGroups';
import './JoinNewGroup.css';

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
            <h1>Alumni Avenue</h1>
        </div>
        <div className="go-back"><button className="back-button">Go back</button></div>
        <div className="join-container">
            <div className="join-title"><h2>Join New Group</h2></div>
            <div className="join-search-container">
                {/* Box that holds the search and all groups */}
                <div className="search-container">
                    <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by group name"/>
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div>
                    <SearchedGroup nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
                    <SearchedGroup nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
                    <SearchedGroup nMem = {numMembers} gPic = {groupPic} gName = {groupName} />
                </div>           
            </div>
        </div>
    </div>
    )
}

export default JoinNewGroup