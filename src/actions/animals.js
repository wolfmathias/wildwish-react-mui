export const addAnimal = (payload) => {
    return { type: 'ADD_ANIMAL', payload };
}; 

export const fetchAnimals = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ANIMALS'})
      fetch('https://localhost:3000/animals').then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'ADD_ANIMALS', responseJSON })
      })
    }
  }