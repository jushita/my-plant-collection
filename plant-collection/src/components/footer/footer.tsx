import React from 'react';
import useStyles from './footer-styles'
import { Typography } from '@material-ui/core';

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Copyright &#169; JRahman 2020
        </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Buy Plants, Live Happy
        </Typography>
        </footer>
    )
}
