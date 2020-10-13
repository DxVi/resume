import React from 'react';



function ResumeSkills({name, level}) {
    const levelValue = level * 3;

    return (
        <div className="resume__skills">
            <h4>{name}</h4>
            <p className="level__background"><span className="level__foreground" style={{display:"block",width:levelValue}}>{level}%</span></p>
            <br />
        </div>
    )
}

export default ResumeSkills
