// // import firebase from "firebase";
// import firebase from "firebase";
// import "firebase/auth";

// const config={
//     apiKey: "AIzaSyA_ZQd4CDlXc-R5_vZCGkIDLe8GB0M52fY",
//     authDomain: "mobile-number-verificati-99bae.firebaseapp.com",
//     projectId: "mobile-number-verificati-99bae",
//     storageBucket: "mobile-number-verificati-99bae.appspot.com",
//     messagingSenderId: "293954689168",
//     appId: "1:293954689168:web:8bcdf4f7c084fdbfa96015",
// }

// firebase.initializeApp(config);

// const app=firebase.initializeApp(config);

// // const auth = getAuth(app);

// export default app;

import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_ZQd4CDlXc-R5_vZCGkIDLe8GB0M52fY",
    authDomain: "mobile-number-verificati-99bae.firebaseapp.com",
    projectId: "mobile-number-verificati-99bae",
    storageBucket: "mobile-number-verificati-99bae.appspot.com",
    messagingSenderId: "293954689168",
    appId: "1:293954689168:web:8bcdf4f7c084fdbfa96015",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;