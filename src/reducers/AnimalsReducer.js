import animals from '../data/Animals';

export default function AnimalsReducer(
    state = {
        animals: animals,
        animalList: []
    }, 
    action
) {
    switch(action.type) {
        case 'ADD_ANIMAL':
            console.log("adding", action.animal)
            return {
                ...state,
                animals: [...state.animals, action.animal]
                // animals: state.animals.concat(state.animalList.length + 1)
            };
            
        default:
            console.log('Initial state.animalList length: %s', state.animalList);
            return state;
    }
   
}