import React from 'react';
import "./Home.css";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function Home({data}) {
    const name=data?.name;
    const job=data?.job;
    const city=data?.address.city;
    const state=data?.address.state;

    return (
        <div id="home" className="home bg-gradient-overlay">
            <div className="home__top">
                <h1>I'm {name}.</h1>
                {/* <h3>I'm currently based in {city}, {state}</h3> */}
                <h3><span>{job}</span></h3>
                {/* <hr /> */}
                <br />
                <br />
                <a className="home__downIcon" href="#about">
                    <PlayForWorkIcon />
                </a>
            </div>
            <div className="home__fadeBottom" />
        </div>
    )
}

export default Home
