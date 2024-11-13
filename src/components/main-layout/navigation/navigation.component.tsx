import {
  AppBar,
  Box, Button, Dialog, IconButton,
  Slide,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SectionIdEnum } from 'types';
import { Close } from '@mui/icons-material';
import { TransitionProps } from '@mui/material/transitions';

export type NavigationProps = {
  isScreenSmall: boolean;
};

const navigationItems = [
  {
    text: 'About',
    navigateLocation: SectionIdEnum.about,
  },
  {
    text: 'Skills',
    navigateLocation: SectionIdEnum.skills,
  },
  {
    text: 'Projects',
    navigateLocation: SectionIdEnum.projects,
  },
  {
    text: 'Contact',
    navigateLocation: SectionIdEnum.contact,
  },
];

const Transition = React.forwardRef((
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) => {
  return <Slide direction="left" ref={ref} {...props} />;
});

export const Navigation: React.FC<NavigationProps> = ({ isScreenSmall }) => {
  const [ openMenu, setOpenMenu ] = useState(false);
 

  const onOpenNavHandler = () => setOpenMenu(true);
  const onCloseNavHandler = () => setOpenMenu(false);

  const mappedNavItems = navigationItems.map(({ navigateLocation, text }) => {
    return (
      <AnchorLink key={navigateLocation} href={`#${navigateLocation}`} offset={isScreenSmall ? '56px' : '64px'} className='allUnset'>
        <Button color="inherit" size="large" fullWidth={isScreenSmall} onClick={onCloseNavHandler}>
          {text}
        </Button>
      </AnchorLink>
    );
  });

  return (
    <>
      <Box gap={2} sx={{ display: { xs: 'none', md: 'flex' } }}>{mappedNavItems}</Box>
      <IconButton color="inherit" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={onOpenNavHandler}>
        <MenuIcon />
      </IconButton>
      <Dialog open={openMenu} fullScreen fullWidth TransitionComponent={Transition} hideBackdrop PaperProps={{
            sx: {
              boxShadow: 'none',
            },
          }}>
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
