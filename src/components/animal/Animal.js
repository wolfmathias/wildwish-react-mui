import React from 'react'
import { GridListTile, GridListTileBar } from '@material-ui/core';

export default function Animal(props) {
    return (
        <GridListTile key={props.animal.id}>
            <img src={props.animal.img} alt={props.animal.name} />
            <GridListTileBar
              title={props.animal.name}
              subtitle={<span>by: {props.animal.species}</span>}
            //   actionIcon={
            //     <IconButton aria-label={`info about ${props.animal.name}`} className={classes.icon}>
            //       <InfoIcon />
            //     </IconButton>
            //   }
            />
          </GridListTile>
    )
}