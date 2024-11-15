import { Box, Stack, Typography } from "@mui/material";
import "./skills.section.css";
import resumePDF from "../skills/DeLaRosa-Resume_24.pdf";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";

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
            <ul>
              <ConnectWithoutContactRoundedIcon
                sx={{ width: "20px", paddingRight: "5px" }}
              />
              Led the development of key product features from concept to
              release, facilitating regular communication with product managers
              and stakeholders
            </ul>
            <ul>
              <NewReleasesRoundedIcon
                sx={{ width: "20px", paddingRight: "5px" }}
              />
              Coordinated with cross-functional teams, monitored and tracked
              feature performance post-release, to gather feedback from users
              and stakeholders to inform future improvements and iterations.
            </ul>
            <ul>
              <NewReleasesRoundedIcon
                sx={{ width: "20px", paddingRight: "5px" }}
              />
              Translated product requirements into actionable tasks for the
              development team, providing clear guidance and technical support
              throughout the development lifecycle.
            </ul>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
