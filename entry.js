import React from 'react';

import ReactDOM from 'react-dom';

import Home from './components/home'



class App extends React.Component{
	render(){
		return(
			<div>
				<Home/>
				
			</div>
		)
	}	
}

ReactDOM.render(<App/>,document.getElementById('out'))