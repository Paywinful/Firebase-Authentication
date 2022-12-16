 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration


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


 