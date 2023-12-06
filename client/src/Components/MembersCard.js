import React from 'react';
import '../ViewGroup/ViewGroup.css';

function MemberCard({ name, classYear, position, company, profilePic, onClick }) {
    return (
        <div className="member-card" onClick={onClick}>
            <img src={profilePic} alt="Profile" className="member-profile-pic" />
            <div className="member-info">
                <div className="member-name">{name}</div>
                <div className="member-class-year">Class of {classYear}</div>
                <div className="member-position">{position}</div>
                <div className="member-position">{company}</div>
            </div>
        </div>
    );
}

export default MemberCard;
