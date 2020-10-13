import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Header({data}) {
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
                <a href="#works">Works</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="header__right">
                <a target="_blank" rel="noopener noreferrer" href={data?.facebook}><FacebookIcon /></a>
                <a target="_blank" rel="noopener noreferrer" href={data?.twitter}><TwitterIcon /></a>
                <a target="_blank" rel="noopener noreferrer" href={data?.github}><GitHubIcon /></a>
            </div>
        </div>
    )
}

export default Header
