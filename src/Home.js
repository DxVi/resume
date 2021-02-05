import React from "react";
import "./Home.css";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

function Home({ data }) {
  const name = data?.name;
  const job1 = data?.job1;
  const job2 = data?.job2;
  const job3 = data?.job3;
  const city = data?.address.city;
  const state = data?.address.state;

  return (
    <div id="home" className="home bg-gradient-overlay">
      <div className="home__top">
        <h1>I'm {name}.</h1>
        {/* <h3>
          Currently based in{" "}
          <span>
            {city}, {state}
          </span>
        </h3> */}
        <h3>
          I am Looking for a job in any of the following roles;
          <br />
          <span center> {job1}</span>
          <br />
          <span> {job2}</span>
          <br />
          <span> {job3}</span>
        </h3>
        <hr />

        <br />
        <br />
        <a className="home__downIcon" href="#about">
          <PlayForWorkIcon />
        </a>
      </div>
      <div className="home__fadeBottom" />
    </div>
  );
}

export default Home;
