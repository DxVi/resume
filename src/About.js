import React from 'react';
import "./About.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function About({data}) {
    let name = "";
    let bio1 = "";
    let bio2 = "";
    let phone = "";
    let email = "";
    let img = "";
    let fb = ""
    let twitter = ""
    let github = ""

    if (data){
        name = data.name;
        bio1 = data.bio1;
        bio2 = data.bio2;
        phone = data.phone;
        email = data.email;
        img = data.image;
        fb = data.facebook;
        twitter=data.twitter;
        github=data.github;
    }
    
    return (
        <div id="about" className="about">
                <div className="about__pic">
                    <img src={`./images/${img}`} alt="" />
                   
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
                        {/* {name} */}
                        <span>{phone}</span><br />
                        <span>{email}</span>
                        </p>
                        <p>
                        <a target="_blank" rel="noopener noreferrer" href={fb}><FacebookIcon /></a>
                        <span>  </span> 
                        <a target="_blank" rel="noopener noreferrer" href={twitter}><TwitterIcon /></a>
                        <span>  </span> 
                        <a target="_blank" rel="noopener noreferrer" href={github}><GitHubIcon /></a>
                    </p>
                    </div>
                </div>
        </div>
    )
}

export default About
