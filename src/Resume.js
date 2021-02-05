import React from "react";
import "./Resume.css";
import ResumeEduc from "./ResumeEduc";
import ResumeWork from "./ResumeWork";
import ResumeSkills from "./ResumeSkills";
import ResumeTech from "./ResumeTech";
import SkillSummary from "./SkillSummary";

function Resume({ data }) {
  let skillmessage = "";
  let othertechmessage = "";
  let educ = [];
  let work = [];
  let skills = [];
  let othertech = [];

  if (data) {
    skillmessage = data.skillmessage;
    othertechmessage = data.othertechmessage;
    educ = data.education;
    work = data.work;
    skills = data.skills;
    othertech = data.othertech;
  }

  return (
    <div id="resume" className="resume">
      <h2>SKILLS SUMMARY</h2>
      <div className="resume__skills">
        <SkillSummary
          skill="SKILL"
          from="FROM"
          to="TO"
          desc="DESCRIPTION"
          header={true}
        />
        {skills ? (
          skills.map((doc) => (
            <SkillSummary
              key={doc.from}
              skill={doc.skill}
              from={doc.from}
              to={doc.to}
              desc={doc.desc}
            />
          ))
        ) : (
          <> </>
        )}
      </div>
      <div className="resume__container">
        <div className="resume__title">
          <p>EDUCATION</p>
        </div>
        <div className="resume__details">
          {educ ? (
            educ.map((doc) => (
              <ResumeEduc
                key={doc.school}
                school={doc.school}
                degree={doc.degree}
                graduated={doc.graduated}
              />
            ))
          ) : (
            <> </>
          )}
        </div>
      </div>
      <hr />

      <div className="resume__container">
        <div className="resume__title">
          <p>WORK EXPERIENCE</p>
        </div>
        <div className="resume__details">
          {work ? (
            work.map((doc) => (
              <ResumeWork
                key={doc.company}
                company={doc.company}
                title={doc.title}
                years={doc.years}
                description={doc.description}
              />
            ))
          ) : (
            <> </>
          )}
        </div>
      </div>
      <hr />

      {/* <div className="resume__container">
        <div className="resume__title">
          <p>SKILLS</p>
        </div>
        <div className="resume__details">
          <p className="resume__message">{skillmessage}</p>
          {skills ? (
            skills.map((doc) => (
              <ResumeSkills key={doc.name} name={doc.name} level={doc.level} />
            ))
          ) : (
            <> </>
          )}
        </div>
      </div>
      <hr />

      <div className="resume__container">
        <div className="resume__title">
          <p>TECHNOLOGIES</p>
        </div>
        <div className="resume__details">
          <p className="resume__message">{othertechmessage}</p>
          {othertech ? (
            othertech.map((doc) => (
              <ResumeTech key={doc.name} name={doc.name} year={doc.year} />
            ))
          ) : (
            <> </>
          )}
        </div>
      </div> */}

      {/* <hr /> */}
      <br />
      <div className="download_resume">
        <a href="https://app.box.com/s/njq478oexbijq4nr3n4q4ncektlr39pm">
          Download Resume for complete details...
        </a>
      </div>
      <br />
      <hr />
    </div>
  );
}

export default Resume;
