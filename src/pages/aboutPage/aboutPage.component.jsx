import React from 'react';

import './aboutPage.styles.scss';
import Content from '../../components/about/content/content.component';
import Image from '../../components/about/image/image.component';

const About = () => (
	<div id='about'>
		<Image />
		<Content />
	</div>
);

export default About;
