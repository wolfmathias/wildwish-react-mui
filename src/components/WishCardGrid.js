import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardFront from './CardFront';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function WishCardGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} >
            <CardFront/>
        </Grid>
        <Grid item xs={12} md={4}>
            <CardFront/>
        </Grid>
        <Grid item xs={12} md={4}>
            <CardFront/>
        </Grid>
      </Grid>
    </div>
  );
}