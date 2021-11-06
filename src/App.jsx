import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

import Nav from './components/navbar/nav/nav.component';
import About from './components/home/homePage/homePage.component';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<Nav />
			<TransitionGroup>
				<CSSTransition
					timeout={{ enter: 1500, exit: 500 }}
					classNames='fade'
					key={location.key}
				>
					<Routes location={location}>
						<Route path='/' element={<About />} />
						<Route path='/home' element={<About />} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;
