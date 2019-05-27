import { LOGIN_OK, LOGOUT, LOGIN_VERIFIED } from "./constants/action-types"
import store from './store';

import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAAjr7ZJnnfz8EzIc21KkQ1zcVwzHtwoX0",
    authDomain: "magic-urls.firebaseapp.com",
    databaseURL: "https://magic-urls.firebaseio.com",
    projectId: "magic-urls",
    storageBucket: "magic-urls.appspot.com",
    messagingSenderId: "212051153197",
    appId: "1:212051153197:web:d9f01f723b3c27c3"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    store.dispatch({ type: LOGIN_VERIFIED });
    if (user) {
        user.getIdToken().then(token => store.dispatch({ type: LOGIN_OK, payload: token }));

        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
    } else {
        store.dispatch({ type: LOGOUT });
        // User is signed out.
        // ...
    }
});

export {
    firebase,
    app
}