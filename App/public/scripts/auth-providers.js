function signInGoogle() {
  console.log("signInGoogle called...");
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider);
}

const googleButton = document.querySelector("#googleLogin");
googleButton.addEventListener("click", (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log("User loged Google", result);
      console.log(result.credential.idToken);
      console.log(result.credential.accessToken);

      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          // Send token to your backend via HTTPS
          console.log("Token", idToken);
        })
        .catch(function (error) {
          // Handle error
        });
    })
    .catch((error) => {
      console.log(error);
    });
});
