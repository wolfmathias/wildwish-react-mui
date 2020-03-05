import { combineReducers } from "redux";
import AnimalsReducer from './AnimalsReducer';
import WishesReducer from './WishesReducer';
 
const rootReducer = combineReducers({
  animalStore: AnimalsReducer,
  wishStore: WishesReducer
});
 
export default rootReducer;

// combineReducers() returns a large reducer structured like the following:
//
// function reducer(state = {
//     animals: [],
//     wishes: []
//   }, action) {
//     let idx
//     switch (action.type) {
   
//       case "ADD_ANIMAL":
//         return [...state, action.animal]
   
//       case 'REMOVE_ANIMAL':
//         ...
//     }
//   }