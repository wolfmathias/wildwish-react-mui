import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function WishProgress() {
    const classes = useStyles();
    const [completed, setCompleted] = React.useState(0);
  
    // TODO: Replace display functions below with one that connects to Wish progress
    React.useEffect(() => {
      function progress() {
        setCompleted(oldCompleted => {
          if (oldCompleted === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldCompleted + diff, 100);
        });
      }
  
      const timer = setInterval(progress, 500);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className={classes.root}>
          <Typography variant="body2" color="textSecondary" component="p">Funding Progress</Typography>
        <LinearProgress variant="determinate" value={completed} />
      </div>
    );
  }