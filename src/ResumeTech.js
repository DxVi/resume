import React from 'react'

function ResumeTech({name, year}) {
    return (
        <div className="resume__tech">
            <h4>{name}</h4>
            <p> <i>{year}</i></p>
            <br />
        </div>
    )
}

export default ResumeTech
