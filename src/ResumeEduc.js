import React from 'react';

function ResumeEduc({school, degree, graduated}) {
    return (
        <div className="resume__educ">
            <h4>{school}</h4>
            <p> <i>{degree}</i> <span>&bull;</span> {graduated}</p>
            <br />
        </div>
         
    )
}

export default ResumeEduc
