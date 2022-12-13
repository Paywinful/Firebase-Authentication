 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration

 // when you want to use it copy your firebaseConfig and replace this(Brandon)
 const firebaseConfig = {
   apiKey: "AIzaSyCv09JGWi0DaDualOwaTSqC2Jq9FjNIkpg",
   authDomain: "authentication-app-53da2.firebaseapp.com",
   databaseURL: "https://authentication-app-53da2-default-rtdb.firebaseio.com",
   projectId: "authentication-app-53da2",
   storageBucket: "authentication-app-53da2.appspot.com",
   messagingSenderId: "215105500199",
   appId: "1:215105500199:web:0230574d1a8ca3c62c0a02"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();


// Make sure your signup button has an id of signup(Brandon)
 signup.addEventListener('click', (e) =>{
 
 var email = document.getElementById('email').value
 var password = document.getElementById('password').value
 var firstname = document.getElementById('first-name').value
 var lastname = document.getElementById('last-name').value
 var phonenumber = document.getElementById('phone-number').value

 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
   set(ref(database, 'users/' + user.uid), {
    // These are the things that are going to enter the database so edit what you want to be in the database and remove what you dont want(Brandon)
     firstname: firstname,
     lastname: lastname,
     phonenumber: phonenumber,
     email: email,
     password: password,
     // profile_picture : imageUrl 
})
 .then(() => {
     // Data saved successfully!
     alert('User Created');
     //After registration of user choose what page you would like to go next(Brandon)
     window.location.href = "login.html";
 })
 .catch((error) => {
     // The write failed...
     alert(error);
 });
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage);
   // ..
 }); 

 })


 