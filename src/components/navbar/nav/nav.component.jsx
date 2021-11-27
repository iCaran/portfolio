import React, { Component } from 'react';

import NavElement from '../navElements/navElements.component';

import './nav.styles.scss';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: ['Home', 'About', 'Work', 'Contact'],
			active: 0
		};
	}

	componentDidMount() {
		if (this.props.location.slice(11) === '') this.setState({ active: 0 });
		else
			this.setState({
				active: this.state.elements.findIndex((e) => {
					return e.toLowerCase() === this.props.location.slice(11);
				})
			});
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
