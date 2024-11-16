import { Box, Typography } from "@mui/material";

export const ProjectsSection: React.FC = () => {
  return (
    <Box className="section">
      <Typography sx={{ mx: "auto" }} className="sectionTitle" variant="h1">
        Projects
      </Typography>
      <Box></Box>

      <Box
        component="iframe"
        src="https://lottie.host/embed/46748089-0932-4f2c-9bd3-50edb55f8abd/drogb36hoi.json"
        sx={{
          width: "100%",
          height: "500px",
          border: "none",
        }}
      />
      <Typography className="subText" variant="h4">
        Working on new projects to flex new skills, check back in to see what I
        have created.
      </Typography>
    </Box>
  );
};
