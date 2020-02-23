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

const Animal = {
    "id": 131,
    "animal_id": 29,
    "toy_id": 7,
    "created_at": "2020-01-30T17:54:04.764Z",
    "updated_at": "2020-02-15T01:55:41.773Z",
    "status": "active",
    "image_url": null,
    "zoo_id": null,
    "message": null,
    "current_funding": null,
    "total_to_fund": 10.0,
    "animal": {
      "id": 29,
      "name": "Bolero",
      "species": "African Lion",
      "bio": null,
      "keeper_id": 5,
      "created_at": "2020-01-30T17:54:03.580Z",
      "updated_at": "2020-01-30T17:54:03.580Z",
      "location": "Wildlife Waystation - California, USA"
    },
    "toy": {
      "id": 7,
      "created_at": "2020-01-30T17:54:04.419Z",
      "updated_at": "2020-01-30T17:54:04.419Z",
      "name": "Tube",
      "description": "It's a tube. Small animals can crawl inside it. Large animals can stick their head in it. Tuuuuuuuuubbbbeeee!!!",
      "cost": 10.0
    }
  }

export default function WishCardGrid() {
  const classes = useStyles();

  // To render list of animals passed in as props
  const renderAnimals = () => {
    this.props.animals.forEach()
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} >
            <CardFront animal={Animal}/>
        </Grid>
        <Grid item xs={12} md={4} >
            <CardFront animal={Animal}/>
        </Grid>
        <Grid item xs={12} md={4} >
            <CardFront animal={Animal}/>
        </Grid>
      </Grid>
    </div>
  );
}