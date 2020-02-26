import React from 'react';
import { GridList, GridListTile, GridListTileBar, ListSubheader, IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles';
import Animal from './Animal';

import DefaultImage from './default_img.jpg';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 380
      
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
                    <ListSubheader component="div">User Animals</ListSubheader>
                </GridListTile>
                {props.animals.map(animal => (
                <GridListTile key={animal.id} cols={1}>
                    <img src={animal.img || DefaultImage}  alt={animal.name} />
                    <GridListTileBar
                    title={animal.name}
                    // subtitle={<span>{animal.species}</span>}
                    actionIcon={
                    <IconButton aria-label={`info about ${animal.name}`} className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                    }
                    />
                </GridListTile>
                ))}
            </GridList>
            
        </div>
    )
}