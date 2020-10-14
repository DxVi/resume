import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header({data}) {
    let fb = ""
    let twitter=""
    let github=""

    if (data){
        fb = data.facebook;
        twitter=data.twitter;
        github=data.github;
    }
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    src={`/images/${data?.image}`}
                    alt=""
                />
                <p>{data?.name}</p>
            </div>

            <div className="header__middle">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#resume">Resume</a>
                <a href="#portfolio">Works</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="header__right">
                <a target="_blank" rel="noopener noreferrer" href={fb}><FacebookIcon /></a>
                <a target="_blank" rel="noopener noreferrer" href={twitter}><TwitterIcon /></a>
                <a target="_blank" rel="noopener noreferrer" href={github}><GitHubIcon /></a>
            </div>
        </div>
    )
}

export default Header
