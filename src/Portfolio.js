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
                <h2>These are the works I have completed</h2>   
                <h4>- Click on the Github icon to check the codes-</h4>
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
        </div>
    )
}

export default Portfolio
