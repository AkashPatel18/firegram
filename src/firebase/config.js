 import firebase from 'firebase/app'

 import 'firebase/storage'
 import 'firebase/firestore'
 
 var firebaseConfig = {
    ///add key
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()

  const projectFireStore = firebase.firestore() 

  const timeStamp = firebase.firestore.FieldValue.serverTimestamp

  export  {projectStorage,projectFireStore , timeStamp}
