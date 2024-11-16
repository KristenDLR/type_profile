import { Container, Box, Typography } from "@mui/material";

import { githubBadge, linkedInBadge } from "assets";
import "./footer.component.css";

export const Footer: React.FC = () => {
  return (
    <Container className="footer">
      <Box >
        <Box>
        <a
          href="https://www.linkedin.com/in/kris10-de-la-rosa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInBadge} alt="linkedIn"></img>
        </a>

        <a
          href="https://github.com/KristenDLR"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubBadge} alt="Github"></img>
        </a>
        </Box>

        <Typography variant="h6" className="footerCopy">Kristen De La Rosa © 2024</Typography>
      </Box>
    </Container>
  );
};
