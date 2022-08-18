import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBd1bmGDhaU8zanwB2J-uLxTazjGI2pYO4",
  authDomain: "proc58-ec33b.firebaseapp.com",
  databaseURL: "https://proc58-ec33b-default-rtdb.firebaseio.com",
  projectId: "proc58-ec33b",
  storageBucket: "proc58-ec33b.appspot.com",
  messagingSenderId: "383577643074",
  appId: "1:383577643074:web:efa0ba5bf211f66d2db5db",
  measurementId: "G-BRW66905D5"
}

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
