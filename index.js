  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDNZFMylOhvUK5jh9XlSDT7eh2pNX9bK-g",
    authDomain: "ship-studios.firebaseapp.com",
    projectId: "ship-studios",
    storageBucket: "ship-studios.appspot.com",
    messagingSenderId: "489622429349",
    appId: "1:489622429349:web:60e6f05f24df566cfdf74c",
    measurementId: "G-PCEFWK8F0C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);