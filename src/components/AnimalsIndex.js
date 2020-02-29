import React from 'react';
import AnimalGrid from './animal/AnimalGrid';
import ShowAnimal from './animal/ShowAnimal';
import {Route} from 'react-router-dom';
import NewAnimal from './animal/NewAnimal';

export default function AnimalsIndex({match, animals}) {
   
    return (
        <>
        <Route exact path="/animals" render={routerProps => <AnimalGrid {...routerProps} animals={animals}/>} />
        <Route exact path={`${match.url}/new`} render={routerProps => <NewAnimal {...routerProps} animals={animals} /> }/>
        {/* <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals} /> }/> */}
        
        </>

        // Have options for views alternate than grid for main index, use list for larger screens
    )

    // Can use routes to show index or individual animals
    // <Route exact path="/" render={<AnimalGrid animals={props.animals}/>} />
    // <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals} /> }/>
}