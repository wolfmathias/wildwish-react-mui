import animals from '../data/Animals';
import uuid from "uuid";

export default function AnimalsReducer(
    state = animals, 
    action
) {
    let idx;
    switch(action.type) { 
        case 'ADD_ANIMAL':
            console.log("adding", action.payload)
            return [...state, action.payload];
        
        case "DELETE_ANIMAL":
            idx = state.findIndex(animal => animal.id  === action.payload.id)
            console.log("deleting", action.payload)
            return [...state.slice(0, idx), ...state.slice(idx + 1)];

        // Both AnimalReducer and WishesReducer respond to ADD WISH action
        // TODO: update prop names to match actual data
        // Do I even want to handle it this way?
        case "ADD_WISH":
            let existingAnimal = state.filter(
                animal => animal.animalName === action.wish.animalName
            );
            if (existingAnimal.length > 0) {
                return state;
            } else {
                return [...state, { animalName: action.wish.animalName, id: uuid() }];
            }

        default:
            return state;
    }
}