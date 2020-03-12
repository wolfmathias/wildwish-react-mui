import uuid from "uuid";

export default function AnimalsReducer(
    state = [], 
    action
) {
    
    switch(action.type) { 
        
        
        case 'ADD_ANIMALS':
            return state.concat(action.payload)
        
        case "DELETE_ANIMAL":
            // Which of the two returns to use below? Both do same thing:
            // let idx = state.findIndex(animal => animal.id  === action.payload)
            // return [...state.slice(0, idx), ...state.slice(idx + 1)];
            return {
                ...state,
                animals: state.animals.filter(animal => animal.id !== action.payload.id),
            }

        // Both AnimalReducer and WishesReducer respond to ADD WISH action
        // TODO: update prop names to match actual data
        // Do I even want to handle it this way?
        // case "ADD_WISH":
        //     let existingAnimal = state.filter(
        //         animal => animal.animalName === action.wish.animalName
        //     );
        //     if (existingAnimal.length > 0) {
        //         return state;
        //     } else {
        //         return [...state, { animalName: action.wish.animalName, id: uuid() }];
        //     }

        default:
            return state;
    }
}