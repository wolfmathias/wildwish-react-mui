import animals from '../data/Animals';

export default function AnimalsReducer(
    state = animals, 
    action
) {
    let idx;
    switch(action.type) {
        case 'ADD_ANIMAL':
            console.log("adding", action.animal)
            // Below return written before adding rootReducer
            // return {
            //     ...state,
            //     animals: [...state.animals, action.animal]
            // };
            return [...state, action.animal];
        // Test below case
        case "REMOVE_ANIMAL":
            idx = state.findIndex(animal => animal.id  === action.id)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        default:
            return state;
    }
}