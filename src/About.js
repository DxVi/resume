import React from 'react';
import "./About.css";

function About({data}) {
    return (
            <div className="about">
            <div className="about__name">
                <h1>{data?.name}</h1>
                
            </div>
            
            <div className="about__me">
                <h3>About Me</h3>
                <p>{`I'm a ${data?.occupation}`}</p>
            </div>

            <div className="about__contact">
                <h3>Contact Details</h3>
                <p>{data?.phone}</p>
                <p>{data?.email}</p>
            </div>
            
        </div>)
        
}

export default About
