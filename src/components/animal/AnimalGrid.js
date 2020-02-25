import React from 'react'
import { GridList, GridListTile, ListSubheader } from '@material-ui/core'



export default function AnimalGrid(props) {
    const classes = useStyles();
    
    const animalCards = props.animals.map(animal => {
        // return <Animal animal={animal} key={animal.id} />
    })


    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Animals</ListSubheader>
                </GridListTile>
            </GridList>
        </div>
    )
}