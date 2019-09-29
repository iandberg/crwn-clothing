import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	// convert to array of objects so we can map them to collection previews
	collections => Object.keys(collections).map(key => collections[key])
)

// here we are returning a createSelector function that then takes state
export const selectCollection = collectionUrlParam => (
	createSelector(
		[selectCollections],
		collections => collections[collectionUrlParam]
	)
)
