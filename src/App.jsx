import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

import Nav from './components/navbar/nav/nav.component';
import Home from './pages/homePage/homePage.component';
import About from './pages/aboutPage/aboutPage.component';
import Work from './pages/workPage/work.component';

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
						<Route path='/portfolio/work' element={<Work />} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;
