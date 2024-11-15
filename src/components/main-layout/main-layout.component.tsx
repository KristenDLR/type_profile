import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { logoImg } from "assets";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionIdEnum } from "types";
import { Navigation } from "./navigation/navigation.component";
import "./main-layout.component.css";

export type MainLayoutProps = {
  children: React.ReactNode;
  isScreenSmall: boolean;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  isScreenSmall,
}) => {
  return (
    <Box height="100vh">
      <AppBar
        position="fixed"
        sx={{ fontFamily: '"Atma", serif !important', background: "#fe8301" }}
      >
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink
              href={`#${SectionIdEnum.intro}`}
              offset={isScreenSmall ? "40px" : "50px"}
              className="allUnset"
            >
              <Box display="flex" alignItems="center" gap={0.5}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography
                  className="topNav"
                  variant="h5"
                  sx={{ width: "fit-content" }}
                >
                  Kristen De La Rosa Portfolio
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isScreenSmall={isScreenSmall} />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
};
