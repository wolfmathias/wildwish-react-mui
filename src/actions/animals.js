// Generate a unique id for every animal
// import uuid from 'uuid'

export const addAnimal = (animal) => {
    return (dispatch) => {
        dispatch({ type: 'ANIMAL_LOAD_START' })
        fetch('http://localhost:3001/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({animal})
        })
        .then(response => response.json())
        .then(responseJSON => {
            // console.log("Posted to the server!")
            dispatch({ type: 'ADD_ANIMALS', payload: responseJSON })
            dispatch( { type: 'ANIMAL_LOAD_END' })
        })
    }
}

export const deleteAnimal = (animal) => {
    return (dispatch) => {
        dispatch({ type: 'ANIMAL_LOAD_START' })
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
            dispatch({ type: 'DELETE_ANIMAL', payload: responseJSON })
            dispatch({ type: 'ANIMAL_LOAD_END' })
        })
    }
}

// How to handle errors when POSTing animal?
// export const addAnimalFailed = (err) => ({
//     type: "ADD_ANIMAL_FAILED",
//     payload: err
// });

export const fetchAnimals = () => {
    return (dispatch) => {
      dispatch({ type: 'ANIMAL_LOAD_START'})
      fetch('http://localhost:3001/animals')
      .then(response => response.json())
      .then(responseJSON => {
        // console.log(responseJSON)
        dispatch({ type: 'ADD_ANIMALS', payload: responseJSON })
        dispatch({ type: 'ANIMAL_LOAD_END'})
      })
    }
}