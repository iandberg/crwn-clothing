import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import {signInWithGoogle} from '../../firebase/firebase.utils'

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

	handleSubmit = (e)=>{
		e.preventDefault()
		this.setState({})
	}

	render(){
		return(
			<div className="sign-in">
					<h2>I already have an account</h2>
					<span>Sign in with your email and password</span>

					<form>

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
							<CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign in with Google</CustomButton>
						</div>
					</form>
			</div>
		)
	}
}

export default SignIn
