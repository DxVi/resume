import React from "react";

function ResumeWork({ company, title, years, description }) {
  return (
    <div className="resume__Work">
      <h4>{title}</h4>
      <p>
        <span>&bull;</span> {years}
      </p>
      <p>
        {" "}
        <i>{company}</i>{" "}
      </p>
      <p>{description}</p>
      <br />
    </div>
  );
}

export default ResumeWork;
