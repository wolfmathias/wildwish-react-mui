import animals from '../data/Animals';

export default function AnimalsReducer(
    state = {
        animals: animals,
    }, 
    action
) {
    switch(action.type) {
        case 'ADD_ANIMAL':
            console.log("adding", action.animal)
            return {
                ...state,
                animals: [...state.animals, action.animal]
            };
            
        default:
            return state;
    }
   
}