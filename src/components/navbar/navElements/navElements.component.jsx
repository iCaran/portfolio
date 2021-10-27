import React from 'react';
import './navElements.styles.scss';

const NavElements = (props) => (
	<a
		className={`nav-elements ${props.active ? 'active' : ''}`}
		href={`#${props.element}`}
		onClick={props.handleClick}
	>
		{props.element}
	</a>
);

export default NavElements;
