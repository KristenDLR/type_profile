import {
  Alert,
  Box,
  Button,
  Snackbar,
  SnackbarCloseReason,
  Stack,
  Typography,
} from "@mui/material";
import "./skills.section.css";
import resumePDF from "../skills/DeLaRosa-Resume_24.pdf";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import { experienceArray } from "../../constants/experience";
import { CurrentExperience } from "./current-experience/current-experience.section";
import SkillsBadges from "./skills-badges/skills-badges.section";
import React, { useState } from "react";

export type SkillsSectiontProps = {
  isScreenSmall: boolean;
};

export const SkillsSection: React.FC<SkillsSectiontProps> = ({
  isScreenSmall,
}) => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleClick = async () => {
    setStatus("loading");
    try {
      const response = await fetch(resumePDF, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download the file");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = resumePDF;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      setStatus("success");
    } catch (error) {
      console.error("Error downloading file:", error);
      setStatus("error");
    }
    setOpen(true);
    console.log(status);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        <SkillsBadges />
        <Stack>
          <Box>
            <Button
              onClick={handleClick}
              variant="contained"
              style={{ textAlign: "center", color: "black" }}
              href={resumePDF}
              download
            >
              <DownloadForOfflineRoundedIcon />
              <Typography variant="h5">Download Resume </Typography>
            </Button>
            {status === "success" && (
              <Snackbar open={open} autoHideDuration={3000}>
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Download completed successfully!
                </Alert>
              </Snackbar>
            )}
            {status === "error" && (
              <Snackbar open={open} autoHideDuration={3000}>
                <Alert
                  onClose={handleClose}
                  severity="error"
                  variant="filled"
                  sx={{ width: "100%" }}
                >
                  Failed to download the file. Please try again.
                </Alert>
              </Snackbar>
            )}
          </Box>

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
