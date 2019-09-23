export const addItemToCart = (cartItems, cartItemToAdd) => {
	// see if item already exists in cartItems
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	)

	// return a new array
	if(existingCartItem){
		return cartItems.map(
			cartItem => {
				return cartItem.id === cartItemToAdd.id ? 
					{ ...cartItemToAdd, quantity: cartItem.quantity + 1} : cartItem
			}
		)
	}else{
		// return just the cart item in new array, but add in the quantity attribute
		return [...cartItems, {...cartItemToAdd, quantity: 1}]
	}
}
