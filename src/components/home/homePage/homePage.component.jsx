import React from 'react';

import './homePage.styles.scss';

import Intro from '../introText/introText.component';
import Photo from '../photo/photo.component';

const Home = () => (
	<div id='intro'>
		<Intro />
		<Photo />
	</div>
);

export default Home;
