import React from 'react';
import AnimalGrid from './AnimalGrid';
import ShowAnimal from './ShowAnimal';
import {Route} from 'react-router-dom';
import NewAnimal from './NewAnimal';
import { connect } from 'react-redux';

function AnimalsIndex({match, animals}) {
   
    return (
        <>
        <Route exact path="/animals" render={routerProps => <AnimalGrid {...routerProps} animals={animals}/>} />
        <Route path={`${match.url}/new`} render={routerProps => <NewAnimal {...routerProps} animals={animals} /> }/>
        {/* <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals} /> }/> */}
        
        </>

        // Have options for views alternate than grid for main index, use list for larger screens
    )

    // Can use routes to show index or individual animals
    // <Route exact path="/" render={<AnimalGrid animals={props.animals}/>} />
    // <Route path={`${match.url}/:animalId`} render={routerProps => <ShowAnimal {...routerProps} animals={animals} /> }/>
}

const mapStateToProps = (state) => {
    return {
      animals: state.animals,
    };
};
  
// const mapDispatchToProps = dispatch => {
//   return {
//     addAnimal: () => dispatch({ type: 'ADD_ANIMAL' })
//   };
// };
//
// OR:
// Below, addAnimal() can accept a payload of an animal as `addAnimal(animal)`, where `animal` is an object {name: "", species: "", etc}
const mapDispatchToProps = dispatch => {
    return {
        addAnimal: () => {
        dispatch(this.props.addAnimal())
        }
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AnimalsIndex)