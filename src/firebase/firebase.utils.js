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

// utility to batch import items to firestore - invoke somewhere once
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

	const collectionRef = firestore.collection(collectionKey)
	
	const batch = firestore.batch()

	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})

	// works when logged out
	return await batch.commit()
}

// gets snapshot object and converts to array of collections
export const convertCollectionsSnapshotToMap = (collections) => {

	// an array of collections that we need to convert to resemble our original SHOP_DATA object
	const transformedCollections = collections.docs.map(doc => {
		const { title, items } = doc.data()
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title: title,
			items: items
		}
	})

	return transformedCollections.reduce((accumulator, collection)=>{
		accumulator[collection.title.toLowerCase()] = collection

		return accumulator
	},{})

}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()

googleProvider.setCustomParameters({prompt: 'select_account'}) //use popup when signing in with Google

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
