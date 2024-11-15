import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import NewReleasesRoundedIcon from "@mui/icons-material/NewReleasesRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";
import Diversity1RoundedIcon from "@mui/icons-material/Diversity1Rounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

export const experienceArray = [
  {
    icon: (
      <ConnectWithoutContactRoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: " Led the development of key product features from concept to release, facilitating regular communication with product managers and stakeholders",
  },
  {
    icon: (
      <NewReleasesRoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: "Coordinated with cross-functional teams, monitored and tracked feature performance post-release, to gather feedback from users and stakeholders to inform future improvements and iterations.",
  },
  {
    icon: (
      <AssignmentRoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: "Translated product requirements into actionable tasks for the development team, providing clear guidance and technical support throughout the development lifecycle.",
  },
  {
    icon: (
      <FeedbackRoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: "Actively participated in the company Site Reliability Engineering (SRE) collaboration guild. Supported the development and implementation of monitoring and alerting systems, enhancing observability to detect and address potential system failures proactively.",
  },
  //__________
  {
    icon: (
      <Diversity1RoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: "Founded and chaired the company’s first Employee Resource Group (ERG), aligning initiatives with the company’s mission to promote diversity, equity, and inclusion (DEI).",
  },
  {
    icon: (
      <CalendarMonthRoundedIcon
        color="success"
        fontSize="large"
        sx={{ width: "100%" }}
      />
    ),
    text: "Planned and executed multiple company-wide events focused on cultural awareness, professional development, and social impact, increasing employee engagement and awareness of DEI.",
  },
];
