// copied from add animal action
export const loginUser = (user) => {
    return (dispatch) => {
        dispatch({ type: 'USER_LOGIN_START' })
        fetch('http://localhost:3001/login', {
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
            dispatch({ type: 'LOGIN_USER', payload: responseJSON })
            dispatch( { type: 'USER_LOGIN_END })
        })
    }
}