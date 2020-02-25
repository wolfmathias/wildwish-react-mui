import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

export default function WishCardGrid(props) {
  const classes = useStyles();
  
  // To render list of animals passed in as props
  const renderWishes =
    props.wishes.map(wish => {
      return <CardFront wish={wish} key={wish.id}/>
    })

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {renderWishes}
      </Grid>
    </div>
  );
}