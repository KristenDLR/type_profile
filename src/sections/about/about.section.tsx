import { Box, Typography } from "@mui/material";

export const AboutSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        columnGap: 3,
        rowGap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Typography variant="h5">
        I am an innovative and growth-oriented software engineer with a unique
        background in education, and I leverage my strong communication and
        problem-solving skills to build impactful technology. I have experience
        in a fast-paced start-up environment, where adaptability and
        resourcefulness were key to delivering high-quality solutions under
        tight timelines. I actively take a collaborative approach, with an
        eagerness to learn and continuously improve, drawing on a deep
        understanding of user engagement, and blending technical expertise with
        a passion for intuitive design to create user-friendly products. I
        founded and chaired the first Employee Resource Group (ERG), cultivating
        an inclusive workplace culture and demonstrating leadership in diversity
        and inclusion. Additionally, contributed to the Site Reliability
        Engineering (SRE) guild, helping to improve system stability and
        performance through proactive collaboration on incident response and
        monitoring initiatives. I bring value through diverse experience and a
        commitment to both personal and professional development.
      </Typography>
      <Box></Box>
    </Box>
  );
};
