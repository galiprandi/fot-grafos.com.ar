// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcYjzy_LNKlMU92EMRrPxYBBUJRKwMixY",
  authDomain: "fotografosapp.firebaseapp.com",
  databaseURL: "https://fotografosapp.firebaseio.com",
  projectId: "fotografosapp",
  storageBucket: "fotografosapp.appspot.com",
  messagingSenderId: "711265217587",
  appId: "1:711265217587:web:4948849c4b502440bc8746",
  measurementId: "G-CZHRLD1EF6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase.analytics();

const db = firebase.firestore();
const dbUsers = db.collection("fotografos");
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function logIn() {
  firebase.auth().signInWithRedirect(provider);
}
function logOut() {
  auth.signOut();
  editar = false;
}