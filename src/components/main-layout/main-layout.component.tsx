import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import { logoImg } from 'assets';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navigation } from './navigation/navigation.component';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: '#fe8301' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink>
              <Box display="flex" alignItems="center" gap={0.5}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content' }}>
                  De La Rosa ROcks
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
};
