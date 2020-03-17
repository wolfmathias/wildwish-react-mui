export default function isLoading(state = {}, action) {
     
    switch(action.type) {
        case 'ANIMAL_LOAD_START':
            return {...state, loadingAnimals: true}
        case 'ANIMAL_LOAD_END':
            return {...state, loadingAnimals: false}
        default:
            return state
     }
}