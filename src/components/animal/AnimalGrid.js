import React from 'react'
import { GridList, GridListTile, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Animal from './Animal';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

export default function AnimalGrid(props) {
    const classes = useStyles();
    
    const animalCards = props.animals.map(animal => {
        return <Animal animal={animal} key={animal.id} />
    })


    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Animals</ListSubheader>
                </GridListTile>
                {animalCards}
            </GridList>
            
        </div>
    )
}