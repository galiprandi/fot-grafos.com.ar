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

// Delete user by ID
// return true / false
function deleteUserById(id) {
  console.log(!!id);
  if (!id) {
    console.error("User Id no defined");
    return false;
  }
  const response = window.confirm(
    "¿ Está seguro que desea eliminar sus datos ?\n"
  );
  if (response) {
    dbUsers
      .doc(id)
      .delete()
      .then(() => {
        localStorage.removeItem("Email");
        return true;
      });
  } else return false;
}

function iniciarSesion() {
  auth.signInWithRedirect(provider);
  // auth.signInWithPopup(provider).then((result) => {
  //   LoginUser = result.user;
  //   console.log(result.user);
  // });
}

function cerrarSesion() {
  auth.signOut();
}
