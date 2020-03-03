// WishesReducer is passed in to combineReducers() when using Redux to create the store.

export default function WishesReducer(state = {wishes: []}, action) {
    let idx;
    switch (action.type) {
      case "ADD_WISH":
        return [...state, action.wish];
   
      case "REMOVE_WISH":
        idx = state.findIndex(wish => wish.id  === action.id)
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
      default:
        return state;
    }
  }
