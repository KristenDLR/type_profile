import React from "react";
import "./skills-badges.section.css";

const SkillsBadges: React.FC = () => {
  return (
    <div className="brick-grid">
      {/* First column with 3 rows */}
      <div className="column">
        <div className="brick">1-1</div>
        <div className="brick">1-2</div>
        <div className="brick">1-3</div>
      </div>

      {/* Second column with 4 rows */}
      <div className="column">
        <div className="brick">2-1</div>
        <div className="brick">2-2</div>
        <div className="brick">2-3</div>
        <div className="brick">2-4</div>
      </div>

      {/* Third column with 3 rows */}
      <div className="column">
        <div className="brick">3-1</div>
        <div className="brick">3-2</div>
        <div className="brick">3-3</div>
      </div>
    </div>
  );
};

export default SkillsBadges;
