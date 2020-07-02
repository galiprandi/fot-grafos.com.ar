// Your web app's Firebase configuration
let LoginUser;
const firebaseConfig = {
  apiKey: "AIzaSyBdJ4J5W6jYzkwlnjnuCzEKe6UqEBcuux8",
  authDomain: "fotografos-argentinos-eb9be.firebaseapp.com",
  databaseURL: "https://fotografos-argentinos-eb9be.firebaseio.com",
  projectId: "fotografos-argentinos-eb9be",
  storageBucket: "fotografos-argentinos-eb9be.appspot.com",
  messagingSenderId: "513249135364",
  appId: "1:513249135364:web:384415f9e2f7a4dce2de51",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const dbUsers = db.collection("fotografos");
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function logIn() {
  auth.signInWithRedirect(provider);
  // auth.signInWithPopup(provider).then((result) => {
  //   LoginUser = result.user;
  //   console.log(result.user);
  // });
}

function logOut() {
  auth.signOut();
  editar = false;
}

auth.onAuthStateChanged((user) => {
  // console.log(user);
  LoginUser = user;
});

firebase
  .auth()
  .getRedirectResult()
  .then(function (result) {
    LoginUser = result.user;
    console.log(LoginUser);
  });
