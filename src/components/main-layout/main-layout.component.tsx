import {
  AppBar, Box, Toolbar, Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { logoImg } from 'assets';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Navigation } from './navigation/navigation.component';
import { SectionIdEnum } from 'types';

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ background: '#fe8301' }}>
        <Toolbar>
          <Box flexGrow={1}>
            <AnchorLink  href={`#${SectionIdEnum.intro}`} offset={isScreenSmall ? '56px' : '64px'} className='allUnset'>
              <Box display="flex" alignItems="center" gap={0.5}>
                <img width="54px" height="54px" src={logoImg} alt="logo" />
                <Typography variant="h5" sx={{ width: 'fit-content' }}>
                  De La Rosa ROcks
                </Typography>
              </Box>
            </AnchorLink>
          </Box>
          <Navigation isScreenSmall={isScreenSmall}/>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
};
