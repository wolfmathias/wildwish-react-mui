import animals from '../data/Animals';
import uuid from "uuid";

export default function AnimalsReducer(
    state = {
        animals: [],
        loading: false
    }, 
    action
) {
    console.log(state.animals)
    switch(action.type) { 
        case 'LOADING_ANIMALS':
            console.log('Loading...')
            return {
                // ...state, 
                animals: [...state.animals],
                loading: true
            };
        
        case 'ADD_ANIMALS':
            console.log("adding", action.payload)
            return {
                ...state, 
                animals: action.payload,
                loading: false
            };
        
        case "DELETE_ANIMAL":
            console.log("deleting animal with id:", action.payload)
            // Which of the two returns to use below? Both do same thing:
            // let idx = state.findIndex(animal => animal.id  === action.payload)
            // return [...state.slice(0, idx), ...state.slice(idx + 1)];
            return {
                ...state,
                animals: state.animals.filter(animal => animal.id !== action.payload)
            }

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