import React from 'react';
import "./About.css";

function About({data}) {
    const name=data?.name;
    const bio1=data?.bio1;
    const bio2=data?.bio2;
    const phone=data?.phone;
    const email=data?.email;
    const street=data?.address.street;
    const city=data?.address.city;
    const state=data?.address.state;
    const zip=data?.address.zip;
    

    return (
        <div id="about" className="about">
                <div className="about__pic">
                    <img src="./images/dixv.jpg" alt="" />
                </div>
                <div className="about__details">
                    <h2>About Me</h2>
                    <p>{bio1}</p>
                    <br />
                    <p>{bio2}</p>
                    <br />  
                    <div>
                        <h2>Contact Details</h2>
                        <p>
                        {name}
                        <br />
                        {/* <span>{street}, {city},<br />
                            {state}, {zip}
                        </span><br /> */}
                        <span>{phone}</span><br />
                        <span>{email}</span>
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default About
