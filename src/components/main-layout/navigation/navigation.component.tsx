import {
  AppBar,
  Box, Button, Dialog, IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import { Close } from '@mui/icons-material';

const navigationItems = [
  {
    text: 'About',
    to: SectionIdEnum.about,
  },
  {
    text: 'Skills',
    to: SectionIdEnum.skills,
  },
  {
    text: 'Projects',
    to: SectionIdEnum.projects,
  },
  {
    text: 'Contact',
    to: SectionIdEnum.contact,
  },
];

export const Navigation: React.FC = () => {
  const [ openMenu, setOpenMenu ] = useState(false);
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const onOpenNavHandler = () => setOpenMenu(true);
  const onCloseNavHandler = () => setOpenMenu(false);

  const mappedNavItems = navigationItems.map(({ to, text }) => {
    return (
      <AnchorLink key={to}>
        <Button color="inherit" size="large" fullWidth={isScreenSmall}>
          {text}
        </Button>
      </AnchorLink>
    );
  });

  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>{mappedNavItems}</Box>
      <IconButton color="inherit" sx={{ display: { xs: 'block', md: 'none' } }} onClick={onOpenNavHandler}>
        <MenuIcon />
      </IconButton>
      <Dialog open={openMenu} fullScreen fullWidth>
        <AppBar position="static" sx={{ background: '#fe8301', color: 'white' }}>
          <Toolbar>
            <Typography variant="h5" sx={{ flexGrow: 1 }}>
              Menu
            </Typography>
            <IconButton color="inherit" onClick={onCloseNavHandler}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" py={3} width="100%" alignItems="center">
          {mappedNavItems}
        </Box>
      </Dialog>
    </>
  );
};
