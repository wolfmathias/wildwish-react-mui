// copied from add animal action


export const loginUser = (username, password) => {
// TODOs:
// store USER object in Redux store
// set USER in browser's localStorage (same as session?)
    
    const LOGIN_URL = 'http://localhost:3001/users/sign_in'
    const LOGIN_OPTIONS = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }
    
    return (dispatch) => {
        dispatch({ type: 'USER_LOGIN_START' })
        fetch(LOGIN_URL, LOGIN_OPTIONS)
        .then(response => response.json())
        .then(responseJSON => {
            // console.log("Posted to the server!")
            dispatch({ type: 'LOGIN_USER', payload: responseJSON })
            dispatch( { type: 'USER_LOGIN_END' })
        })
    }
}