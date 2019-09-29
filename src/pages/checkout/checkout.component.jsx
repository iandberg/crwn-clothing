import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// pages/components
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

// selectors
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartTotal } from '../../redux/cart/cart.selectors'

// styles
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, total}) => {
	return(
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
						<span>Product</span>
				</div>
				<div className="header-block">
						<span>Quantity</span>
				</div>
				<div className="header-block">
						<span>Price</span>
				</div>
				<div className="header-block">
						<span>Remove</span>
				</div>
			</div>
				{
					cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} /> )
				}
				<div className="total">Total: ${total}</div>

				<div class="test-warning">
						*Please us the following test credit card for payments*
					<br/>
					4242 4242 4242 4242 - 01/20 - 123
				</div>

				<StripeCheckoutButton price={total} />
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
