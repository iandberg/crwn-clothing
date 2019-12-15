import React from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

class SignIn extends React.Component{

	constructor(){
		super()

		this.state = {
			email: '',
			password: '',
		}
	}

	onChangeHandle = (e)=>{
		const {name, value} = e.target

		this.setState({
			[name] : value
		})
	}

	handleSubmit = async (e)=>{
		e.preventDefault()

		const {emailSignInStart} = this.props
		const {email, password} = this.state

		emailSignInStart(email, password)
	}

	render(){

		const { googleSignInStart } = this.props

		return(
			<div className="sign-in">
					<h2>I already have an account</h2>
					<span>Sign in with your email and password</span>

					<form onSubmit={this.handleSubmit}>

						<FormInput
							label="Email"
							name="email"
							type="email"
							value={this.state.email}
							onChange={this.onChangeHandle}
							required
						/>

						<FormInput
							label="Password"
							name="password"
							type="password"
							value={this.state.password}
							onChange={this.onChangeHandle}
							required
						/>
						<div className="buttons">
							<CustomButton type="submit"> Submit </CustomButton>
							<CustomButton 
								type="button"
								onClick={googleSignInStart}
								isGoogleSignIn 
							>Sign in with Google</CustomButton>
						</div>
					</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn)
