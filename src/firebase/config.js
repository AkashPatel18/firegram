 import firebase from 'firebase/app'

 import 'firebase/storage'
 import 'firebase/firestore'
 
 var firebaseConfig = {
    apiKey: "AIzaSyA7n_hzRt6cOjr0F41W3H4m6tkIaT0S4fM",
    authDomain: "firegram-e191e.firebaseapp.com",
    projectId: "firegram-e191e",
    storageBucket: "firegram-e191e.appspot.com",
    messagingSenderId: "386586940883",
    appId: "1:386586940883:web:fec4d261fba6e2e563cb26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()

  const projectFireStore = firebase.firestore() 

  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export  {projectStorage,projectFireStore , timeStamp}