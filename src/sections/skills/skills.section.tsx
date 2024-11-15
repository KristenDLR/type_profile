import { Box, Stack, Typography } from "@mui/material";
import "./skills.section.css";
import resumePDF from "../skills/DeLaRosa-Resume_24.pdf";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { experienceArray } from "../../constants/experience";
import { CurrentExperience } from "./current-experience/current-experience.section";

export type SkillsSectiontProps = {
  isScreenSmall: boolean;
};

export const SkillsSection: React.FC<SkillsSectiontProps> = ({
  isScreenSmall,
}) => {
  return (
    <Box className="SkillsSection">
      <Typography sx={{ mx: "auto" }} className="sectionTitle" variant="h1">
        Skills
      </Typography>
      <Box
        className="skillsSection"
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: isScreenSmall ? "1fr" : "repeat(2, 1fr)",
        }}
      >
        <Box>one</Box>
        <Stack>
          <a
            style={{ textAlign: "center", color: "black", padding: "50px" }}
            href={resumePDF}
            download
          >
            <DownloadForOfflineRoundedIcon />
            Download Resume
          </a>
          <Box className="experience">
            <Typography variant="h3">Most recent experience</Typography>
            <Typography variant="h5">Highlight- Software Engineer I</Typography>
            <CurrentExperience items={experienceArray} />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
