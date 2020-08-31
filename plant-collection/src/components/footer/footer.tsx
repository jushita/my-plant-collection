import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import useStyles from '../app/app-styles';
import AppBar from '@material-ui/core/AppBar';


export default function Footer() {
    const classes = useStyles();
    return (
        <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
    )
}
