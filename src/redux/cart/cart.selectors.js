import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
	[selectCart], 
	cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
	[selectCartItems], 
	cartItems => {
		if(cartItems.length){
			return cartItems.reduce((acc, item)=> acc + item.quantity, 0)
		}else{
			return 0
		}
	}
)

export const selectCartHidden = createSelector(
	selectCart,
	cart => cart.hidden
)
