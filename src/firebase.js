import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyDEOhNHo_s4WeEu2Vj74mTRtVeK7zopQEA',
	authDomain: 'crypto-f635b.firebaseapp.com',
	projectId: 'crypto-f635b',
	storageBucket: 'crypto-f635b.appspot.com',
	messagingSenderId: '117772040574',
	appId: '1:117772040574:web:bd45415df99f8203f61b2f',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
