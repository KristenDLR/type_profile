import {
  Box,
  Button,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@mui/material";

import "./intro.section.css";
import { SectionIdEnum } from "types";
import { roseImg } from "assets";
import { KeyboardDoubleArrowDown } from "@mui/icons-material";

export type IntroSectionnProps = {
  isScreenSmall: boolean;
};

export const IntroSection: React.FC<IntroSectionnProps> = ({
  isScreenSmall,
}) => {
  const theme = createTheme();
  const responsiveText = responsiveFontSizes(theme);

  return (
    <Box>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <Box width={isScreenSmall ? "400px" : "600px"} className="content">
        <img
          height={isScreenSmall ? "150px" : "200px"}
          src={roseImg}
          alt="rose"
          className="rose"
        />
        <Box>
          <ThemeProvider theme={responsiveText}>
            <Typography className="introText" variant="h4">
              Hello, my name is
            </Typography>
            <Typography className="name" variant="h3" mb={1} fontWeight={500}>
              Kristen
            </Typography>
            <Typography className="name" variant="h3" mb={1} fontWeight={500}>
              De La Rosa
            </Typography>
            <Typography className="introText" variant="h5" mb={3}>
              I am a full stack developer.
            </Typography>
          </ThemeProvider>
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            color: "white",
          }}
          color="success"
          href={`#${SectionIdEnum.about}`}
          size="small"
          endIcon={<KeyboardDoubleArrowDown />}
        >
          View My Work
        </Button>
      </Box>
    </Box>
  );
};
