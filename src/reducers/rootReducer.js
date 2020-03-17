import { combineReducers } from "redux";
import animals from './AnimalsReducer';
import wishes from './WishesReducer';
import loadStatus from './manageLoading'
 
const rootReducer = combineReducers({
  animals,
  wishes,
  loadStatus
  // donationStore: DonationsReducer
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