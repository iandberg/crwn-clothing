import firebase from 'firebase/app' //base import

// attach to firebase keyword to:
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDtOxTq6FCTexodCrwH_poipj_JA5Vijiw",
    authDomain: "crwn-db-37dd7.firebaseapp.com",
    databaseURL: "https://crwn-db-37dd7.firebaseio.com",
    projectId: "crwn-db-37dd7",
    storageBucket: "",
    messagingSenderId: "925863128681",
    appId: "1:925863128681:web:3accc3571cc9f72134bcf8"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get(); // includes 'exists' property

	if(!snapShot.exists){ //if user doesn't already exist, then create it
		const {displayName, email} = userAuth
		const createdAt = new Date()

		try{

			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})

		}catch(err){
			console.log('error creating user',err.message);

		}

	}

	return userRef // a documentRef
}

firebase.initializeApp(config)

// you can find in docs

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'}) //use popup when signing in with Google

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
