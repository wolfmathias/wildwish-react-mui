// copied from add animal action

// TODOs:
// store USER object in Redux store
// set USER in browser's localStorage (same as session?)
// learn AXIOS to handle fetch requests
// refactor to reduce boilerplate

export const loginUser = (email, password) => {
    const LOGIN_URL = 'http://localhost:3001/users/sign_in'
    const LOGIN_OPTIONS = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return (dispatch) => {
        fetch(LOGIN_URL, LOGIN_OPTIONS)
        .then(response => response.json())
        .then(responseJSON => {
            dispatch({ type: 'LOGIN_USER', payload: responseJSON })
        })
    }
}

export const addUser = (email, password, action) => {
    // Use 'action' to determine route?
    
    const LOGIN_URL = 'http://localhost:3001/users/sign_up'
    const LOGIN_OPTIONS = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    return (dispatch) => {
        fetch(LOGIN_URL, LOGIN_OPTIONS)
        .then(response => response.json())
        .then(responseJSON => {
            dispatch({ type: 'LOGIN_USER', payload: responseJSON })
        })
    }
}