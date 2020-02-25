import React from 'react'

export default function AnimalGrid(props) {
    const animalCards = props.animals.map(animal => {
        return <Animal animal={animal} key={animal.id} />
    })

    return (
        <Grid container>
            {animalCards}
        </Grid>
    )
}