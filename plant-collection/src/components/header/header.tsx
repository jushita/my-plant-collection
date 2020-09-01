import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import useStyles from './header-styles'
import AppBar from '@material-ui/core/AppBar';

export default function Header(): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar className={classes.navBar}>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Plant Collection
          </Typography>
      </Toolbar>
    </AppBar>
  )
}