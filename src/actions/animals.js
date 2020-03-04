// export const addAnimal = (animal) => {
//     return { type: 'ADD_ANIMALS', payload: animal };
// }; 
import uuid from 'uuid'

export const addAnimal = (animal) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANIMALS' })
        fetch('http://localhost:3001/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                animal: {
                    // id: uuid(),
                    name: animal.name,
                    species: animal.species
                }
            })
        })
        .then(response => response.json())
        .then(responseJSON => {
            console.log("Posted to the server!")
            dispatch({ type: 'ADD_ANIMALS', payload: responseJSON })
        })
    }
}

export const deleteAnimal = (animal) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_ANIMALS' })
        console.log("sending delete request for:", animal)
        fetch(`http://localhost:3001/animals/${animal.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                animal: {
                    id: animal.id,
                    name: animal.name,
                    species: animal.species
                }
            })
        })
        .then(response => response.json())
        .then(responseJSON => {
            console.log("Posted to the server!")
            dispatch({ type: 'DELETE_ANIMAL', payload: responseJSON })
        })
    }
}

// export const addAnimalOk = () => ({
//     type: "ADD_ANIMAL_OK"
// });
  
// export const addAnimalFailed = (err) => ({
//     type: "ADD_ANIMAL_FAILED",
//     payload: err
// });

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
