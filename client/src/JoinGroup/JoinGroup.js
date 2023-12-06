import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SearchedGroup from '../Components/SearchedGroups';
import HeadCard from "../HeadCard/HeadCard"
import { Link } from 'react-router-dom';
import '../CreateGroup/CreateGroup.css';
import './JoinGroup.css';


function JoinGroup() {
    const [searchTerm, setSearchTerm] = useState('');
    
    // SAMPLE DATA, DELETE LATER
    const [sampleGroups, setSampleGroups] = useState([
        {
            id: 'group1',
            groupName: 'Art Club',
            groupPic: 'https://via.placeholder.com/150/0000FF/808080?text=Art+Club',
            numMembers: 25,
            groupDescription: "Black, frizzy hair is pulled back to reveal a round, friendly face. Big, round black eyes, set concealed within their sockets, watch meticulously over the lands they've felt disconnected from for so long. A sword left a mark reaching from just under the right eye , running across the nose and ending above his right eye leaves an agonizing memory of defended homes."
        },
        {
            id: 'group2',
            groupName: 'Tech Enthusiasts',
            groupPic: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Tech+Enthusiasts',
            numMembers: 40,
            groupDescription: "Ginger, shoulder-length hair hangs over a furrowed, lively face. Small amber eyes, set far within their sockets, watch readily over the children they've sworn to protect for so long."
        },
        {
            id: 'group3',
            groupName: 'Book Readers',
            groupPic: 'https://via.placeholder.com/150/FFFF00/000000?text=Book+Readers',
            numMembers: 15,
            groupDescription: "Blonde, short hair gently hangs over a craggy, radiant face. Squinting brown eyes, set low within their sockets, watch warmly over the tribes they've felt disconnected from for so long."
        },
        {
            id: 'group4',
            groupName: 'Chess Club',
            groupPic: 'https://via.placeholder.com/150/008000/FFFFFF?text=Chess+Club',
            numMembers: 10,
            groupDescription: "Black, frizzy hair is pulled back to reveal a round, friendly face. Big, round black eyes, set concealed within their sockets, watch meticulously over the lands they've felt disconnected from for so long. A sword left a mark reaching from just under the right eye , running across the nose and ending above his right eye leaves an agonizing memory of defended homes."
        },
        {
            id: 'group5',
            groupName: 'Music Lovers',
            groupPic: 'https://via.placeholder.com/150/00FFFF/000000?text=Music+Lovers',
            numMembers: 30,
            groupDescription: "Gray, short hair hangs over a fine, warm face. Gentle gray eyes, set gracefully within their sockets, watch enthusiastically over the natives they've felt disconnected from for so long."
        }
    ]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // REPLACE FILTER DATA WITH BACKEND COMPONENTS
    const filteredGroups = sampleGroups.filter(group => 
        group.groupName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <HeadCard/>
            <div className="below-header">
                <div className="top-buttons">
                    <div className="create-new-group">Join New Group</div>
                    <Link to="/HomeScreen">
                        <button className="cancel-button">Home</button>
                    </Link>
                </div>
                
                <div className="join-container">
                    <div className="join-search-container">
                        <div className="search-container">
                            <input
                                type="text"
                                className="search-bar"
                                placeholder="Search by group name..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div>
                            {filteredGroups.map(group => (
                                <SearchedGroup
                                    key={group.id}
                                    nMem={group.numMembers}
                                    gPic={group.groupPic}
                                    gName={group.groupName}
                                    gDescription={group.groupDescription}
                                />
                            ))}
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinGroup;
