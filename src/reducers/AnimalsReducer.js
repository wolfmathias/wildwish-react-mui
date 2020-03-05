import uuid from "uuid";

export default function AnimalsReducer(
    state = {
        animals: [],
        isFetching: false
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
                isFetching: true
            };
        
        case 'ADD_ANIMALS':
            console.log("adding:", action.payload)
            return {
                ...state, 
                animals: state.animals.concat(action.payload),
                isFetching: false
            };
        
        case "DELETE_ANIMAL":
            console.log("deleting animal:", action.payload)
            // Which of the two returns to use below? Both do same thing:
            // let idx = state.findIndex(animal => animal.id  === action.payload)
            // return [...state.slice(0, idx), ...state.slice(idx + 1)];
            return {
                ...state,
                animals: state.animals.filter(animal => animal.id !== action.payload.id),
                isFetching: false
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