import React from 'react';
import "./BuildCard.css";
import GitHubIcon from '@material-ui/icons/GitHub';

function BuildCard({title, category, image, url, github}) {
    return (
        <div className="buildCard">
            <div className="buildCard__title">
                <div className="title__icon">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon />
                    </a>
                    <p>github</p>
                </div>
                <div className="title__title">
                    <h2>{title}</h2>  
                </div>
                
            </div>
            <div className="buildCard__img" >
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                        src={`/images/portfolio/${image}`}
                        alt=""
                    />
               </a>
               
            </div>
            
            <div className="buildCard__details">
                <p>{category}</p>
            </div>
            
        </div>
    )
}

export default BuildCard
