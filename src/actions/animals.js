export const addAnimal = (payload) => {
    return { type: 'ADD_ANIMAL', payload };
}; 

export const fetchAnimals = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ANIMALS'})
      fetch('http://localhost:3001/animals')
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_ANIMALS', payload: responseJSON })
      })
    }
  }