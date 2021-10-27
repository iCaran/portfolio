import React, { Component } from 'react';
import './App.scss';

import Nav from './components/navbar/nav/nav.component';
import About from './components/home/homePage/homePage.component';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Nav />
				<About />
			</div>
		);
	}
}

export default App;
