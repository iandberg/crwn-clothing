import ShopActionTypes from './shop.types'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
})

// thunk in action: we return a function that will be invoked with dispatch as 1st arg
// we can then dispatch multiple actions within
export const fetchCollectionsStartAsync = () => {

	return dispatch => {
		
		const collectionRef = firestore.collection('collections')
		dispatch(fetchCollectionsStart())

		collectionRef
			.get()
			.then(snapshot =>{
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
				dispatch(fetchCollectionsSuccess(collectionsMap))
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)))
	}
}
