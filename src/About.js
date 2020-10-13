import React from 'react';
import "./About.css";
import {Button} from "@material-ui/core";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function About({data}) {
    const name=data?.name;
    const bio=data?.bio;
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
                <p>{bio}</p>
                <br /> <br />
                <div>
                    <h2>Contact Details</h2>
                    <p>
                    <span>{name}</span><br />
                    <span>{street}, {city},<br />
                          {state}, {zip}
                    </span><br />
                    <span>{phone}</span><br />
                    <span>{email}</span>
                    </p>

                    
                </div>
                <p className="about__downIcon">
                        <a href="#resume">
                            <Button>
                                <PlayForWorkIcon />
                            </Button>
                        </a>
                    </p>
            </div>
        </div>
    )
}

export default About
