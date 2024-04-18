import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from "firebase";


var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyB8qGkrHluOcHEblZRwNxedjA2SqowyY8U",
    authDomain: "towntalk-contact.firebaseapp.com",
    projectId: "towntalk-contact",
    storageBucket: "towntalk-contact.appspot.com",
    messagingSenderId: "562341820814",
    appId: "1:562341820814:web:81d4863cdaa2016b320cdf",
    measurementId: "G-9J7WHPTTJ8"
});


var db=firebaseApp.firestore();

export {db};
