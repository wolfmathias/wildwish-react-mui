const BASE_URL = 'http://localhost:3001'
const ACTIVE_WISHES = '/wishes/active'

export const fetchWishes = () => {
    return (dispatch) => {
        // dispatch action to change state.isFetching to 'true'
        // TODO: create LoadingReducer and modify structure of state/store
        // dispatch({type: 'WISH_LOAD_START'})
        fetch(BASE_URL.concat(ACTIVE_WISHES))
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({ type: 'ADD_WISHES', payload: respJSON })
            // dispatch({ type: 'WISH_LOAD_END })
        })
    }
}

// Rewrite fetchWIshes as general method:
// export const fetchResource = (route, respAction) => {
//     return (dispatch) => {
//       dispatch({ type: 'LOADING_RESOURCES'})
//       fetch(BASE_URL.concat(route))
//       .then(response => response.json())
//       .then(responseJSON => {
//         console.log(responseJSON)
//         dispatch({ type: respAction, payload: responseJSON })
//       })
//     }
// }