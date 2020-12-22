import firebase from 'firebase/app'
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCWEcaGs5SBBYrrBS0Nc8gfdAFmCm5ITug",
    authDomain: "voting-system-c2529.firebaseapp.com",
    databaseURL: "https://voting-system-c2529.firebaseio.com",
    projectId: "voting-system-c2529",
    storageBucket: "voting-system-c2529.appspot.com",
    messagingSenderId: "400061566541",
    appId: "1:400061566541:web:746779dec6a5ec5f621604",
    measurementId: "G-KNQBTNM0D2"
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_authDomain,
    // databaseURL: process.env.REACT_APP_databaseURL,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    // measurementId: process.env.REACT_APP_measurementId
})

export const auth = app.auth()
export default app