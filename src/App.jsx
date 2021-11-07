import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

import Nav from './components/navbar/nav/nav.component';
import Home from './components/home/homePage/homePage.component';
import About from './components/about/aboutPage/aboutPage.component.jsx';

function App() {
	const location = useLocation();
	return (
		<div className='App'>
			<Nav location={location.pathname} />
			<TransitionGroup>
				<CSSTransition
					timeout={{ enter: 1500, exit: 500 }}
					classNames='fade'
					key={location.key}
				>
					<Routes location={location}>
						<Route path='/portfolio/' element={<Home />} />
						<Route path='/portfolio/about' element={<About />} />
						{/* <Route path='*' element={<Home />} /> */}
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;
