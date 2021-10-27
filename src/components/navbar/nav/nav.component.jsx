import React, { Component } from 'react';

import NavElement from '../navElements/navElements.component';

import './nav.styles.scss';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			elements: ['Home', 'About', 'Resume', 'Work', 'Contact'],
			active: 0
		};
	}

	render() {
		return (
			<nav className='Nav navbar fixed-top'>
				<div className='container'>
					{this.state.elements.map((e, i) => (
						<NavElement
							key={i}
							element={e}
							active={i === this.state.active}
							handleClick={(e) =>
								this.setState({
									active: this.state.elements.indexOf(e.target.innerHTML)
								})
							}
						/>
					))}
				</div>
			</nav>
		);
	}
}

export default Nav;
