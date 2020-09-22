import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import Typography from '@material-ui/core/Typography';
import useStyles from './header-styles'
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position="relative" className="header">
      <Toolbar className={classes.navBar}>
        <FilterVintageIcon fontSize="large" className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          <Link className="headline" to={'/'}>Plant Collection</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}