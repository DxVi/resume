import React from 'react';

function ResumeWork({company, title, years, description}) {
    return (
        <div className="resume__Work">
             <h4>{company}</h4>
            <p> <i>{title}</i> <span>&bull;</span> {years}</p>
            <p>{description}</p>
            <br />
        </div>
    )
}

export default ResumeWork
