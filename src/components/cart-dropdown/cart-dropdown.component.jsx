import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selectors'

import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems, history}) => (
	<div className="cart-dropdown">
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

		<CustomButton onClick={()=>history.push("/checkout")}>Go to Checkout</CustomButton>

	</div>
)

const mapStateToProps = state => ({
	cartItems : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
