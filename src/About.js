import React from "react";
import "./About.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

function About({ data }) {
  let name = "";
  let skill1 = "";
  let skill2 = "";
  let skill3 = "";
  let skill4 = "";
  let phone = "";
  let email = "";
  let img = "";
  let fb = "";
  let twitter = "";
  let github = "";

  if (data) {
    name = data.name;
    skill1 = data.skill1;
    skill2 = data.skill2;
    skill3 = data.skill3;
    skill4 = data.skill4;
    phone = data.phone;
    email = data.email;
    img = data.image;
    fb = data.facebook;
    twitter = data.twitter;
    github = data.github;
  }

  return (
    <div id="about" className="about">
      <div className="about__pic">
        <img src={`./images/${img}`} alt="" />
      </div>
      <div className="about__details">
        <h2>About Me</h2>
        <h3>My name is Dixon.</h3>
        <br />
        <h2>
          I am an experienced IT professional that would contribute the
          following skills to your company.
        </h2>
        <br />
        <ul>
          <li>{skill1}</li>
          <ul>
            <li>System Analyst / Developer : 10+ years</li>
            <li>L2 Production Support : 7 years</li>
            <li>L2 Production Support Team Lead : 2 years</li>
            <li>Programmer : 2 years</li>
            <li>Computer Technician : 1 year</li>
            <li>IT Instructor : 1 year</li>
            <li>Customer Service : 3 years</li>
          </ul>
          <br />
          <li>{skill2}</li>
          <br />
          <li>{skill3}</li>
          <br />
          <li>{skill4}</li>
          <br />
        </ul>
        <br />
        <div>
          <h2>Contact Details</h2>
          <p>
            {/* {name} */}
            <span>{phone}</span>
            <br />
            <span>{email}</span>
          </p>
          <p>
            <a target="_blank" rel="noopener noreferrer" href={fb}>
              <FacebookIcon />
            </a>
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href={twitter}>
              <TwitterIcon />
            </a>
            <span> </span>
            <a target="_blank" rel="noopener noreferrer" href={github}>
              <GitHubIcon />
            </a>
          </p>
        </div>
      </div>
      <div className="about__me"></div>
    </div>
  );
}

export default About;
