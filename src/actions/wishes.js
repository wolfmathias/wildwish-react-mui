export const fetchWishes = () => {
    return (dispatch) => {
        // dispatch action to change state.isFetching to 'true'
        // TODO: create LoadingReducer and modify structure of state/store
        dispatch({type: 'LOADING_RESOURCES'})
        fetch('http://localhost:3001/wishes/active')
        .then(resp => resp.json())
        .then(respJSON => {
            dispatch({ type: 'ADD_WISHES', payload: respJSON })
        })
    }
}