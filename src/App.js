import React from 'react';
import { Route, Switch, Link } from "react-router-dom"

import './App.css';

import Homepage from "./pages/homepage/homepage.component"

const HatsPage = (props)=>{
	return(
		<div>
			<Link to={`${props.match.url}/34`}>special link</Link>
		<div>hats be here</div>
	</div>
	)
}

function App() {
  return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/hats">Hats</Link>
			<Switch>
				<Route exact path="/" component={Homepage}/>
				<Route path="/hats/" component={HatsPage}/>
			</Switch>
		</div>
  );
}

export default App;
