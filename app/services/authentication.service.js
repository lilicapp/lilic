import firebase from 'react-native-firebase';

export const isUserLogged = () => {
  firebase.auth().onAuthStateChanged((user) => !!user);
};

export const auth = () => {
  firebase.auth();
};

export const signUp = (email, password) => {
  firebase.
    auth().
    createUserWithEmailAndPassword(email, password).
    catch((error) => this.setState({errorMessage: error.message}));
};

export const login = (email, password) => {
  firebase.
    auth().
    signInWithEmailAndPassword(email, password).
    catch((error) => this.setState({errorMessage: error.message}));
};

