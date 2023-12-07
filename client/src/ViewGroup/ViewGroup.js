import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ViewGroup.css';
import HeadCard from "../HeadCard/HeadCard";
import MemberCard from "../Components/MemberCard"
import { getCurrentUserId } from '../currentUser';

function ViewGroup() {
  const { groupId } = useParams();
  const [groupData, setGroupData] = useState({
    groupName: "",
    groupDetails: "",
    peopleCount: 0,
    peopleInGroup: [],
    profilePicture: "",
  });

  const navigate = useNavigate();
  const [membersData, setMembersData] = useState([]);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/groups/${groupId}`);

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error fetching group', errorData);
        } else {
          const jsonData = await response.json();
          console.log('Fetched group', jsonData);
          setGroupData(jsonData);

          // Fetch details of each member in peopleInGroup
          const membersPromises = jsonData.peopleInGroup.map(async (userId) => {
            try {
              const userResponse = await fetch(`http://localhost:4000/api/users/${userId}`);
              if (!userResponse.ok) {
                const errorData = await userResponse.json();
                console.error(`Error fetching user ${userId}`, errorData);
                return null;
              } else {
                const userData = await userResponse.json();
                console.log(`Fetched user ${userId}`, userData);
                return userData;
              }
            } catch (error) {
              console.error(`Error fetching user ${userId}`, error.message);
              return null;
            }
          });

          const resolvedMembers = await Promise.all(membersPromises);
          setMembersData(resolvedMembers.filter((member) => member !== null));
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchGroup();
  }, [groupId]);

  // Email Functionality
  const handleMemberClick = (memberEmail) => {
    navigate('/message', { state: { memberEmail } });
  };

  // Filter
  const [filterType, setFilterType] = useState('');
  const [filterInput, setFilterInput] = useState('');

  const filterMembers = (member) => {
    if (!filterInput) return true; // Show all members if filter input is empty

    // Convert filter input to lower case for case-insensitive comparison
    const lowerCaseFilterInput = filterInput.toLowerCase();

    // If filterType is defined and valid, filter by that type
    if (filterType && member[filterType]) {
      return member[filterType].toLowerCase().includes(lowerCaseFilterInput);
    }

    // If filterType is not set or invalid, search across all fields
    return Object.values(member).some(value =>
      String(value).toLowerCase().includes(lowerCaseFilterInput)
    );
  };

  const handleLeave = async () => {
    try {
      const userId = getCurrentUserId();
      // remove user from group array
      const response = await fetch(`http://localhost:4000/api/groups/removeFromGroup/` + groupId + '/' + userId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          groupId,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('User removed from group array', responseData);
        navigate('/JoinGroup');
      } else {
        console.error('Failed to remove user from group array', response.statusText);
      }
    } catch (error) {
      console.error('Error leaving user for group:', error.message);
    }

    try {
      const userId = getCurrentUserId();
      // remove user from group array
      const response = await fetch(`http://localhost:4000/api/users/leaveGroup/` + userId + '/' + groupId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          groupId,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Group removed from user array', responseData);
        navigate('/JoinGroup');
      } else {
        console.error('Failed to remove group from user array', response.statusText);
      }
    } catch (error) {
      console.error('Error leaving group for user:', error.message);
    }
  };

  const filteredMembers = membersData.filter(filterMembers);

  return (
    <>
      <HeadCard />
      <div className="view-group-container">
        <div className="view-group-header">
          <div className="group-info">
            <img src={groupData.profilePicture} alt="Group" className="group-picture" />
            <div className="group-name">{groupData.groupName}:</div>
            <div className="group-members-count">{groupData.peopleCount} Members</div>
          </div>
          <div className="group-header-right">
            <button className="LeaveGroup" onClick={handleLeave}>Leave Group</button>
            <Link to="/HomeScreen">
              <button className="cancel-button">Home</button>
            </Link>
          </div>
        </div>

        {/* Filter */}
        <div className="filter-section">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="filter-type-select"
          >
            <option value=""></option>
            <option value="name">Name</option>
            <option value="position">Position</option>
            <option value="company">Company</option>
            <option value="classYear">Class Year</option>
          </select>
          <input
            type="text"
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            placeholder="Type to filter..."
            className="filter-input"
          />
        </div>

        <div className="members-container">
          {filteredMembers.map((member, index) => (
            <MemberCard
              key={index}
              onClick={() => handleMemberClick(member.email)}
              name={member.name}
              classYear={member.graduationYear}
              position={member.jobPosition}
              company={member.company}
              profilePic={member.profilePicture}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ViewGroup;
