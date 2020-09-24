import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import Typography from '@material-ui/core/Typography';
import useStyles from './header-styles'
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import './header.css';
import { IconButton } from '@material-ui/core';
import EcoIcon from '@material-ui/icons/Eco';


export default function Header(): JSX.Element {
  const classes = useStyles();


  return (
    <div className="header">
      <div className="header-headline">
        <FilterVintageIcon fontSize="large" className={classes.icon} />
        <h2 className="headline">
          <a href={'/'}>
            Plant Collection
          </a>
        </h2>
      </div>
      <div className="header-headline">
        <EcoIcon fontSize="large"></EcoIcon>

        <h2 className="headline">
          <a href={'/admin/'}>
            Manage
          </a>
        </h2>
      </div>
    </div >

  )
}


// <AppBar position="relative" className="header">
//       <Toolbar className={classes.navBar}>
//         <FilterVintageIcon fontSize="large" className={classes.icon} />
//         <Typography variant="h6" color="inherit" noWrap>
//           <Link className="headline" to={'/'}>Plant Collection</Link>
//         </Typography>

//       </Toolbar>
//     </AppBar>