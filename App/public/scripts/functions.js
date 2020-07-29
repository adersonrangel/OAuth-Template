function logIn(email, password) {
  console.log("LogIn - Email: " + email + ", Password: " + password);
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      alert("User loged");
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
}

function register(email, password) {
  console.log("Register - Email: " + email + ", Password: " + password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      alert("User account create");
    })
    .catch((error) => {
      alert("User can not create!");
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}

const getProfileData1 = () => {
  var user = firebase.auth().currentUser;
  if (user != null) {
    console.log(`User information: ${user}`);
  } else {
    alert("There is a not authenticated user");
  }
};

function getProfileData() {
  var user = firebase.auth().currentUser;
  debugger;
  if (user != null) {
    console.log(`User information: ${user}`);
  } else {
    alert("There is a not authenticated user");
  }
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert("User logout!");
    })
    .catch((error) => {
      alert("Error: ", error.message);
    });
}

function updateProfile() {
  var user = firebase.auth().currentUser;

  if (user != null) {
    user.updateProfile({
      displayName: "Update Name",
    });
  } else {
    alert("There is no user!");
  }
}

function verifyUser() {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(() => {
      alert("sent email");
    })
    .catch("Email not sent!");
}
