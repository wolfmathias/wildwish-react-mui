// Do anything with these?
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import boleroImg from './bolero.JPG'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export default function CardFront() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Bolero the lion"
          height="380"
          image={boleroImg}
          title="Bolero the lion"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bolero
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bolero is an African Lion residing at a wildlife sanctuary in California.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}