import React from 'react';

import './homePage.styles.scss';

import Intro from '../introText/introText.component';
import Photo from '../photo/photo.component';

const About = () => (
	<div id='about'>
		<Intro />
		<Photo />
	</div>
);

export default About;
