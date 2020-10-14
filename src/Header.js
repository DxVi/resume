import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function Header({data}) {
    let name = "";
    let img = "";

    if (data){
        name = data.name;
        img = data.image;
    }
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    src={`./images/portfolio/${img}`}
                    alt=""
                />
                <p>{name}</p>
            </div>
            
            <div className="header__right">    
                <div className="menu__home">
                    <a href="#home">
                        <HomeIcon />
                        <p className="desktop" >Home</p>
                    </a>
                </div>
                <div className="menu__about">
                    <a href="#about">
                        <PersonIcon />
                        <p className="desktop">About</p>
                    </a>
                </div>
                <div className="menu__resume">
                    <a href="#resume"> 
                        <SchoolIcon />
                        <p className="desktop">Resume</p>
                    </a>
                </div>
                <div className="menu__works">
                    <a href="#portfolio">
                        <CodeIcon />
                        <p className="desktop">Works</p>
                    </a> 
                </div>
                <div className="menu_contact">
                    <a href="#contact">
                        <ContactMailIcon />
                        <p className="desktop">Contact</p>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Header
