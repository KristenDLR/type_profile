import React from "react";
import "./skills-badges.section.css";
import { Box } from "@mui/material";
import {
  cSharpBadge,
  cssBadge,
  gitBadge,
  htmlBadge,
  jsBadge,
  mongodbBadge,
  npmBadge,
  postgressBadge,
  reactBadge,
  typescriptBadge,
} from "assets";

const SkillsBadges: React.FC = () => {
  return (
    <Box className="brick-grid">
      {/* First column with 3 rows */}
      <Box className="column">
        <Box className="brick">
          <img src={gitBadge} alt="Git badge" />
        </Box>
        <Box className="brick">
          {" "}
          <img src={cSharpBadge} alt="C# badge" />
        </Box>
        <Box className="brick">
          {" "}
          <img src={cssBadge} alt="Css badge" />
        </Box>
      </Box>

      {/* Second column with 4 rows */}
      <Box className="column">
        <Box className="brick">
          <img src={typescriptBadge} alt="typescript Badge" />
        </Box>
        <Box className="brick">
          <img src={npmBadge} alt="npm Badge" />
        </Box>
        <Box className="brick">
          <img src={jsBadge} alt="js Badge" />
        </Box>
        <Box className="brick">
          <img src={htmlBadge} alt="html Badge" />
        </Box>
      </Box>

      {/* Third column with 3 rows */}
      <Box className="column">
        <Box className="brick">
          <img src={reactBadge} alt="react Badge" />
        </Box>
        <Box className="brick">
          <img src={postgressBadge} alt="postgress Badge" />
        </Box>
        <Box className="brick">
          <img src={mongodbBadge} alt="mongodb Badge" />
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsBadges;
