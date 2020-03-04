export const addAnimal = (animal) => {
    return { type: 'ADD_ANIMALS', payload: animal };
}; 

export const addAnimalOk = () => ({
    type: "ADD_ANIMAL_OK"
});
  
export const addAnimalFailed = (err) => ({
    type: "ADD_ANIMAL_FAILED",
    payload: err
});

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

export const postAnimal = (animal) => {
    fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            animal: {
                name: animal.name,
                species: animal.species
            }
        })
    })
    // Do something with the response
    // .then(do_something)
}