// WishesReducer is passed in to combineReducers() when using Redux to create the store.

export default function WishesReducer(state = [], action) {
  let idx;

  switch (action.type) {
    case "ADD_WISHES":
      // return [...state, action.wishes];
      // or should it be: 
      return state.concat(action.payload);

    case "DELETE_WISH":
    idx = state.findIndex(wish => wish.id  === action.payload)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}
