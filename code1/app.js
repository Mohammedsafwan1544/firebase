const auth = firebase.auth();
const whenSignedIn = document.getElementById('whenSignedUp');
const whenSignedOut = document.getElementById('whenSignedOut');

const signUpBtn = document.getElementById('signUpBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.auth.EmailAuthProvider();

signUpBtn.onclick = () => auth.signUpWithEmailAndPassword(email, password);

signOutBtn.onclick = () => auth.signOut();