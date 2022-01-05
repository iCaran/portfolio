import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.scss';

import Nav from './components/navbar/nav/nav.component';
import Home from './pages/homePage/homePage.component';
import About from './pages/aboutPage/aboutPage.component';
import Work from './pages/workPage/work.component';
import Contact from './pages/contactPage/contact.component';

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
						<Route exact path='/' element={<Home />} />
						<Route exact path='/about' element={<About />} />
						<Route exact path='/work' element={<Work />} />
						<Route exact path='/contact' element={<Contact />} />
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
}

export default App;
