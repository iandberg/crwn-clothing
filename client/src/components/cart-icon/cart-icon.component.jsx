import React from 'react'

import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, cartItems}) => {

	return (
	<button className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{cartItems}</span>
	</button>
	)
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => {
	// because the state changes, the cart reducer is called and this cartItems changes, but we don't want to rerender if the item total is the same
	// we use a selector for memoization
	return ({
		cartItems : selectCartItemsCount(state)
	})

}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
