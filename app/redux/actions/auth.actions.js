
import firebase from 'react-native-firebase';
import {createAction} from 'redux-actions';

// Authentication
const AUTH_USER = () => ({
  type: 'AUTH_USER',
  payload: 'Trying auth in application'
});
const AUTH_USER_SUCCESS = createAction('AUTH_USER_SUCCESS');
const AUTH_USER_FAILED = createAction('AUTH_USER_FAILED');

export function auth () {
  return function (dispatch) {
    dispatch(AUTH_USER());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let actionAuthUser = AUTH_USER_SUCCESS(user.providerData[0]);
        dispatch(actionAuthUser);
      } else {
        let actionAuthUser = AUTH_USER_FAILED(user);
        dispatch(actionAuthUser);
      }
    });
  };
} 

// Login
const LOGIN_USER = () => ({
  type: 'LOGIN_USER',
  payload: 'Login user in application'
});
const LOGIN_FAILED = createAction('LOGIN_FAILED');

export function login (email, password) {
  return function (dispatch) {
    dispatch(LOGIN_USER());
    firebase.
      auth().
      signInWithEmailAndPassword(email, password).
      catch((error) => dispatch(LOGIN_FAILED(error)));
  };
}

// Logout
const LOGOUT_USER = () => ({
  type: 'LOGOUT_USER',
  payload: 'Logout user in application'
});
const LOGOUT_FAILED = createAction('LOGOUT_FAILED');

export function logout () {
  return function (dispatch) {
    dispatch(LOGOUT_USER());
    firebase.auth().signOut().
      catch((error) => dispatch(LOGOUT_FAILED(error)));
  };
}

// SignUp
const SIGNUP_USER = () => ({
  type: 'SIGNUP_USER',
  payload: 'Sign Up user in application'
});
const SIGNUP_USER_FAILED = createAction('SIGNUP_FAILED');

export function signUp (email, password) {
  return function (dispatch) {
    dispatch(SIGNUP_USER());
    firebase.
      auth().
      createUserWithEmailAndPassword(email, password).
      catch((error) => dispatch(SIGNUP_USER_FAILED(error)));
  };
}

// SignUp - Seller

// SignUp - User


