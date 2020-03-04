import React from 'react';
import AnimalGrid from './AnimalGrid';
import ShowAnimal from './ShowAnimal';
import { Route, Switch } from 'react-router-dom';
import NewAnimal from './NewAnimal';
import { connect } from 'react-redux';
import Button from '@material-ui/core'

function AnimalsIndex({match, animals}) {
//    debugger

// TODO: Change to ES6 class, or make parent component Animals Page that has routes for everything
console.log({match, animals})
    return (
        <>
        <Switch>
        <Route exact path="/animals" render={routerProps => <AnimalGrid {...routerProps} animals={animals}/>} />
        <Route path={`${match.url}/new`} render={routerProps => <NewAnimal {...routerProps} animals={animals} /> }/>
        <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals.animals} /> }/>
        </Switch>
        
        </>

        // Have options for views alternate than grid for main index, use list for larger screens
    )

    // Can use routes to show index or individual animals
    // <Route exact path="/" render={<AnimalGrid animals={props.animals}/>} />
    // <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals} /> }/>
}

// Use redux to connect state from store to current props
const mapStateToProps = (state) => {
    return {
      animals: state.animalStore,
    };
};

// Connect component to redux store
export default connect(mapStateToProps)(AnimalsIndex)