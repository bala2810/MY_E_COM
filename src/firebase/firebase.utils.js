import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';





const config={
    apiKey: "AIzaSyA-LgdTHsKeJ4G_ZwiSyvH7hSwyXlTCVWY",
    authDomain: "bala2810-e054d.firebaseapp.com",
    databaseURL: "https://bala2810-e054d.firebaseio.com",
    projectId: "bala2810-e054d",
    storageBucket: "bala2810-e054d.appspot.com",
    messagingSenderId: "38536013900",
    appId: "1:38536013900:web:f7d07d96f1a067cef96ce9",
    measurementId: "G-ZY359Z9N2D"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore =firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


