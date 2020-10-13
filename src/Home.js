import React from 'react';
import "./Home.css";
import {Button} from "@material-ui/core";
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

function Home({data}) {
    const name=data?.name;
    const job=data?.job;
    const city=data?.address.city;
    const state=data?.address.state;

    return (
        <div id="home" className="home">
            <br/>
            <h1>I'm {name}.</h1>
            <br />
            <h3>I'm currently based in <span>{city}, {state}</span></h3>
            <h3>I am a {job}</h3>
            <br />
            <hr />
            <p className="home__downIcon">
                <a href="#about">
                    <Button>
                        <PlayForWorkIcon />
                    </Button>
                </a>
            </p>
        </div>
    )
}

export default Home
