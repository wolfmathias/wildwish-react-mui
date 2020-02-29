import React from 'react'
import { GridListTile, GridListTileBar } from '@material-ui/core';
import DefaultImage from './default_img.jpg';

export default function AnimalTile(props) {
    return (
        <GridListTile key={props.animal.id} cols={2} style={{ height: 'auto' }}>
            <img src={props.animal.img || DefaultImage} alt={props.animal.name} />
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