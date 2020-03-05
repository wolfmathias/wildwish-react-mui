import React from 'react';
import AnimalGrid from './AnimalGrid';
import ShowAnimal from './ShowAnimal';
import { Route, Switch } from 'react-router-dom';
import NewAnimal from './NewAnimal';
import { connect } from 'react-redux';

// match given by routerprops. When not using redux, animals is also passed in from parent: AnimalsIndex({ match, animals })
function AnimalsIndex(props) {

// TODO: Change to ES6 class, or make parent component Animals Page that has routes for everything
    return (
        
        <>
        <Switch>
            <Route exact path="/animals" render={routerProps => <AnimalGrid {...routerProps} />} />
            <Route path={`${props.match.url}/new`} render={routerProps => <NewAnimal {...routerProps} /> }/>
            <Route path={`${props.match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} /> }/>
        </Switch>
        </>
    )
}

// Use redux to connect state from store to current props
const mapStateToProps = (state) => {
    return {
      animals: state.animalStore,
    };
};

// Connect component to redux store
export default connect(mapStateToProps)(AnimalsIndex)