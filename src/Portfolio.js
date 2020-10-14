import React from 'react';
import "./Portfolio.css";
import BuildCard from "./BuildCard";

function Portfolio({data}) {
    let projects=[];

    if(data){
        projects=data.projects;
    }

    return (
        <div id="portfolio" className="portfolio">
            <div className="portfolio__title">
                <br />
                <h2>My builds for ReactJS</h2>   
                <p>- Click on the GitHub icon to see the codes -</p>
            </div>
            <div className="portfolio__cards">
                {
                    data ?(
                        projects.map(proj => (
                        <BuildCard 
                            key={proj.title} 
                            title={proj.title} 
                            category={proj.category} 
                            image={proj.image}
                            url={proj.url}
                            github={proj.github}
                        />
                      ))
                       )
                          :
                          (<> </>)
                }
            </div>
            <hr />
        </div>
    )
}

export default Portfolio
