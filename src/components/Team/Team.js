import React from 'react';
import TeamMember from './TeamMember'; // Adjust path based on your project structure
import teamMembers from './TeamData'; // Adjust path based on your project structure
import './Team.css'; // Import the CSS file for styling

const Team = () => {
    // Separate faculty coordinators and student coordinators
    const facultyCoordinators = teamMembers.slice(0, 3);
    const studentCoordinators = teamMembers.slice(3);

    return (
        <div className='team-page'>
            <div className="team-container">
                <h1 className="team-title">Our Team</h1>
                
                <div className="faculty-coordinators">
                    <h2 className="section-title">Faculty Coordinators</h2>
                    <div className="team-members">
                        {facultyCoordinators.map(member => (
                            <TeamMember key={member.id} member={member} />
                        ))}
                    </div>
                </div>

                <div className="student-coordinators">
                    <h2 className="section-title">Student Coordinators</h2>
                    <div className="team-members">
                        {studentCoordinators.map(member => (
                            <TeamMember key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
