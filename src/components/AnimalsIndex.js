import React from 'react';
import AnimalGrid from './animal/AnimalGrid';

export default function AnimalsIndex(props) {
    return (
        <AnimalGrid animals={props.animals}/>
    )

}