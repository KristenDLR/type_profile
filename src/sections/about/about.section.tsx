import { Box, Typography } from "@mui/material";
import { greenMeImg } from "assets";
import "./about.section.css";

export type AboutSectiontProps = {
  isScreenSmall: boolean;
};

export const AboutSection: React.FC<AboutSectiontProps> = ({
  isScreenSmall,
}) => {
  return (
    <Box className="section">
      <Typography sx={{ mx: "auto" }} className="sectionTitle" variant="h1">
        About
      </Typography>
      <Box
        className="aboutSection"
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: isScreenSmall ? "1fr" : "repeat(2, 1fr)",
        }}
      >
        <img src={greenMeImg} alt="Developer Photograph" className="greenMe" />
        <Typography variant="h6" className="subText">
          I am an innovative and growth-oriented software engineer with a unique
          background in education, and I leverage my strong communication and
          problem-solving skills to build impactful technology. I have
          experience in a fast-paced start-up environment, where adaptability
          and resourcefulness were key to delivering high-quality solutions
          under tight timelines. I actively take a collaborative approach, with
          an eagerness to learn and continuously improve, drawing on a deep
          understanding of user engagement, and blending technical expertise
          with a passion for intuitive design to create user-friendly products.
          I founded and chaired the first Employee Resource Group (ERG),
          cultivating an inclusive workplace culture and demonstrating
          leadership in diversity and inclusion. Additionally, contributed to
          the Site Reliability Engineering (SRE) guild, helping to improve
          system stability and performance through proactive collaboration on
          incident response and monitoring initiatives. I bring value through
          diverse experience and a commitment to both personal and professional
          development.
        </Typography>
      </Box>
    </Box>
  );
};
