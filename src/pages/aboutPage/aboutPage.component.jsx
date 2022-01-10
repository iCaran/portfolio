import React from 'react';

import './aboutPage.styles.scss';
import Content from '../../components/about/content/content.component';
import Timeline from '../../components/about/timeline/timeline.component';

const About = () => (
	<div id='about'>
		<Timeline />
		<Content />
	</div>
);

export default About;
