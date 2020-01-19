import React from 'react';

class ErrorBoundary extends React.Component {

	constructor(){
		super();

		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error){ //catches errors thrown by any child components
		return { hasErrored: true } // return new state from method
	}

	componentDidCatch(error, info) {
		// log info
		console.log(error);
	}

	render() {

		if(this.state.hasErrored){
			return <div> Something went wrong </div>
		}

		return this.props.children
	}

}

export default ErrorBoundary
