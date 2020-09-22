import React from 'react';
import useStyles from './footer-styles'
import { Typography, Button } from '@material-ui/core';
import './footer.css'

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer} id="footer">
            <Button variant="contained" color="primary" className="admin-button" href={`/form`}>
                Admin Portal
            </Button>
            <Typography align="center" gutterBottom>
                Copyright &#169; JRahman 2020
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
                Buy Plants, Live Happy
            </Typography>
        </footer>
    )
}
