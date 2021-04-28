import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDv-GpzFU8jcDo5lI6cgHMXRbB9-MvDTQ8",
    authDomain: "vet-app-9f350.firebaseapp.com",
    databaseURL: "https://vet-app-9f350-default-rtdb.firebaseio.com",
    projectId: "vet-app-9f350",
    storageBucket: "vet-app-9f350.appspot.com",
    messagingSenderId: "7309286880",
    appId: "1:7309286880:web:c6c8ed4cf1892f9065df85",
    measurementId: "G-QCY2S2WH7Y"
  };
  // Initialize Firebase
  var fireDb = Firebase.initializeApp(firebaseConfig);
  

  export default fireDb.database().ref();