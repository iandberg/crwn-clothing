import React from 'react'

import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import { CartDropdownContainer } from './cart-dropdown.styles'
import { CustomButtonContainer } from '../custom-button/custom-button.styles'

const CartDropdown = ({cartItems, history, dispatch}) => (

	<CartDropdownContainer>
		<div className="cart-items">
				{
					cartItems.length ? (
						cartItems.map(item => <CartItem key={item.id} item={item}/>)	
					)
					: (
						<span className="empty-message">Your cart is empty</span>
					)
				}
		</div>

		<CustomButtonContainer onClick={
			()=>{
				history.push("/checkout")
				dispatch(toggleCartHidden())
			}
		}>Go to Checkout</CustomButtonContainer>

	</CartDropdownContainer>
)

const mapStateToProps = state => ({
	cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
