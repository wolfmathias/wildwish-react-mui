// Do anything with these?
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


import boleroImg from './bolero.JPG'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function CardFront() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            California, USA
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
       
      </CardActions>
      <CardActions disableSpacing>
        <Button size="small" color="primary" onClick={handleExpandClick}>
          ABOUT BOLERO
        </Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          disableRipple
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="about animal"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Info about each animal goes in this expanded card.
          </Typography>
          <Typography paragraph>
            Card content includes animal bio and information about the enrichment for the Wish.
          </Typography>
          <Typography paragraph>
            The bio section will have a character limit so content in cards do not need to be truncated.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}