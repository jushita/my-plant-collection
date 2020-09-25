import React from 'react';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import useStyles from './header-styles'
import './header.css';
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
