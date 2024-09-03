// TeamMember.js

import React from 'react';
import PropTypes from 'prop-types';
import './Team.css'; // Adjust path based on your project structure

const TeamMember = ({ member }) => {
    const { name, photo, designation, linkedin } = member;

    const handleMemberClick = () => {
        window.open(linkedin, '_blank'); // Open member's LinkedIn profile in a new tab
    };

    return (
        <div className="team-member" onClick={handleMemberClick}>
            <div className="team-member-box">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={photo} alt={name} className="team-member-photo" />
                </a>
                <div className="team-member-details">
                    <h3 className="team-member-name">{name}</h3>
                    <p className="team-member-designation">{designation}</p>
                </div>
            </div>
        </div>
    );
};

TeamMember.propTypes = {
    member: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        designation: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired, // Ensure `linkedin` is a required string
    }).isRequired,
};

export default TeamMember;
