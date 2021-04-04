import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyCdMCzZCguS6mYFkFPwrz4PvG9Qj2EM7d0",
    authDomain: "the-foodies-train-8189c.firebaseapp.com",
    projectId: "the-foodies-train-8189c",
    storageBucket: "the-foodies-train-8189c.appspot.com",
    messagingSenderId: "887212849566",
    appId: "1:887212849566:web:729671066ce612bbaffe8f"
})

//not able to read from .env.local file

export const auth = app.auth();
export const db = app.firestore();
export default app;

/*
    apiKey: "AIzaSyCg2ABD35vAM2BS8c1tApXGtg9RxhnZF3w",
    authDomain: "the-foodies-train.firebaseapp.com",
    projectId: "the-foodies-train",
    storageBucket: "the-foodies-train.appspot.com",
    messagingSenderId: "170152845067",
    appId: "1:170152845067:web:4bc3d97acb219591638c0e"
*/