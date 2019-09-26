import React from 'react'

import './checkout-item.styles.scss'
import { connect } from 'react-redux'

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, addItem, removeItem, clearItemFromCart}) => {

	const {name, imageUrl, price, quantity} = cartItem;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<button className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</button>
				<div className="name">{quantity}</div>
				<button className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</button>
			</span>
			<span className="price">{price}</span>
			<button className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</button>
		</div>
	)
}

const mapDispatchToProps = dispatch =>({
	clearItemFromCart : item => dispatch(clearItemFromCart(item)),
	addItem : item => dispatch(addItem(item)),
	removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
