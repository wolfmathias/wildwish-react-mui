  
export default function manageUsers(state = {
    user: {},
  }, action){
    switch (action.type) {
      case 'LOGIN_USER':
        console.log('Logging in ', action.user);
        return {
          ...state,
          user: action.payload
        }
  
      default:
        return state;
    }
  };