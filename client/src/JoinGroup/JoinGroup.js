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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // REPLACE FILTER DATA WITH BACKEND COMPONENTS
    let filteredGroups = [];
    if (groups!= null)
    {
        filteredGroups = groups.filter(group => 
        group.groupName.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

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
                            {filteredGroups.map(groups => (
                                <SearchedGroup
                                    key={groups.id}
                                    nMem={groups.peopleCount}
                                    gPic={groups.profilePicture}
                                    gName={groups.groupName}
                                    gDescription={groups.groupDetails}
                                    gID={groups._id}
                                    gPW={groups.password}
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
