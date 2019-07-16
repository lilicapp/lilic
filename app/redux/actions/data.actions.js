import firebase from 'react-native-firebase';
import {createAction} from 'redux-actions';

// Get Categories
const GET_POPULAR_CATEGORIES = () => ({
  type: 'GET_POPULAR_CATEGORIES',
  payload: 'Trying auth in application'
});
const GET_POPULAR_CATEGORIES_SUCCESS = createAction('GET_POPULAR_CATEGORIES_SUCCESS');
const GET_POPULAR_CATEGORIES_FAILED = createAction('GET_POPULAR_CATEGORIES_FAILED');

export function getPopularCategories () {
  return function (dispatch) {
    dispatch(GET_POPULAR_CATEGORIES());
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        let action = GET_POPULAR_CATEGORIES_SUCCESS(user.providerData[0]);
        dispatch(action);
      } else {
        let action = GET_POPULAR_CATEGORIES_FAILED(user);
        dispatch(action);
      }
    });
  };
} 


