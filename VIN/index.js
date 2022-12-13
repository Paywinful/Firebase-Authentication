

login.addEventListener('click', (e) =>{

  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  // ...
  
  var lgDate = new Date();
  update(ref(database, 'users/' + user.uid), {
      last_login: lgDate,
  // profile_picture : imageUrl 
})
.then(() => {
  // Data saved successfully!
  alert('User logged in');
})
.catch((error) => {
  // The write failed...
  alert(error);
});
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
});



})