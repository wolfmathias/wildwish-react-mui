import { combineReducers } from "redux";
import AnimalsReducer from './AnimalsReducer';
import WishesReducer from './WishesReducer';
 
const rootReducer = combineReducers({
  animals: AnimalsReducer,
  wishes: WishesReducer
});
 
export default rootReducer;