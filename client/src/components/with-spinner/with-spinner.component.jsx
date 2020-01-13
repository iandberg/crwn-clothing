import React from 'react'
import Spinner from '../spinner/spinner.component'

// higher order component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
		return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
}

export default WithSpinner
