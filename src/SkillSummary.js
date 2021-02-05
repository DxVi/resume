import React from "react";
import "./SkillSummary.css";

function SkillSummary({ skill, from, to, desc, header }) {
  return (
    <div className={`skillSummary ${header && "skillSummary--header"}`}>
      <p className="skillSummary__skill">{skill}</p>
      <p className="skillSummary__from">{from}</p>
      <p className="skillSummary__to">{to}</p>
      <p className="skillSummary__desc">{desc}</p>
    </div>
  );
}

export default SkillSummary;
