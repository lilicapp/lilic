const initialState = {
  isLogged: false,
  lastAction: null,
  authUser: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
  // Authentication
  case 'AUTH_USER': 
    return {...state, lastAction: action.payload, loadingUser: true};
  case 'AUTH_USER_SUCCESS': 
    return {...state, authUser: action.payload, isLogged: true, loadingUser: false};
  case 'AUTH_USER_FAILED':
    return {...state, authUser: null, error: action.payload, isLogged: false, loadingUser: false};
  // Login
  case 'LOGIN_USER':
    return {...state, lastAction: action.payload, loadingUser: true};
  case 'LOGIN_FAILED':
    return {...state, error: action.payload, isLogged: false};
  // Logout
  case 'LOGOUT_USER':
    return {...state, lastAction: action.payload, loadingUser: true};
  case 'LOGOUT_FAILED':
    return {...state, error: action.payload, isLogged: true, loadingUser: false};
  // SignUp
  case 'SIGNUP_USER':
    return {...state, lastAction: action.payload, loadingUser: true};
  case 'SIGNUP_FAILED':
    return {...state, error: action.payload, isLogged: false, loadingUser: false};
  default: 
    return state;
  }
};


export {authReducer};