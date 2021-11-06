import React from 'react';
import { Link } from 'react-router-dom';

import './navElements.styles.scss';

const NavElements = (props) => (
	<Link
		to={`/${props.element.toLowerCase()}`}
		className={`nav-elements ${props.active ? 'active' : ''}`}
		onClick={props.handleClick}
	>
		{props.element}
	</Link>
);

export default NavElements;
