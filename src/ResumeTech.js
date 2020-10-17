import React from 'react'

function ResumeTech({name, year}) {
    return (
        <div className="resume__tech">
            <p> <i>{year}</i></p>
            <h4>{name}</h4>
            <br />
            <br />
        </div>

    )
}

export default ResumeTech
