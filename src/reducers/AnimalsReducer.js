import React from 'react';

export default function AnimalsReducer(
    state = {
        animalList: []
    }, 
    action
) {
    switch(action.type) {
        case 'ADD_ANIMAL':
            console.log("added animal")
            return {
                ...state,
                animalList: state.animalList.concat(state.animalList.length + 1)
            };
            
        default:
            console.log('Initial state.animalList length: %s', state.animalList.length);
            return state;
    }
   
}