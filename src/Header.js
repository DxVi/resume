import React from 'react';
import "./Header.css";
import {Avatar, Button} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Link} from "react-router-dom";

function Header({data}) {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <Avatar 
                        src={data?.image}
                        alt=""
                    />
                </Link>
                <p>{data?.name}</p>
                
            </div>

            <div className="header__middle">
                <Link to="/">
                    <Button>About</Button>
                </Link>
                <Link to="/builds">
                    <Button>Builds</Button>
                </Link>
                
                <Button>Resume</Button>
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
