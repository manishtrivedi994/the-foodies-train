// import firebase from 'firebase/app';
// import firebase from 'firebase'
const firebase = require('firebase/app')
// import 'firebase/auth';
// import 'firebase/firestore';
const dotenv = require('dotenv')

dotenv.config({ path: './config_views.env' })
console.log(process.env.APPID)

const app = firebase.initializeApp({
    apiKey: process.env.APIKEY,//"AIzaSyCdMCzZCguS6mYFkFPwrz4PvG9Qj2EM7d0",
    authDomain: process.env.AUTHDOMAIN,//"the-foodies-train-8189c.firebaseapp.com",
    projectId: process.env.PROJECTID,//"the-foodies-train-8189c",
    storageBucket: process.env.STORAGEBUCKET,//"the-foodies-train-8189c.appspot.com",
    messagingSenderId: process.env.MESSAGINGSENDERID,//"887212849566",
    appId:process.env.APPID// "1:887212849566:web:729671066ce612bbaffe8f"
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