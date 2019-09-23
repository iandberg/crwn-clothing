import {createSelector} from 'reselect'

// input selector: returns piece of state
const selectCart = state => state.cart

// for use in cart dropdown
export const selectCartItems = createSelector(
	// array of all the selectors
	[selectCart], //returns cart, which we then pass in:
	cart => cart.cartItems
)

// for use in cart icon
export const selectCartItemsCount = createSelector(
	[selectCartItems], // returns cartItems...
	cartItems => {
		if(cartItems.length){
			return cartItems.reduce((acc, item)=> acc + item.quantity, 0)
		}
	}
)

// all createSelector() return functions that accept state as arg
