import React from 'react';

import './homePage.styles.scss';

import Intro from '../../components/home/introText/introText.component';
import Photo from '../../components/home/photo/photo.component';

const Home = () => (
	<div id='intro'>
		<Intro />
		<Photo />
	</div>
);

export default Home;
