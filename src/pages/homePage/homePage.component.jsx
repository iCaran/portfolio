import React from 'react';

import Intro from './components/introText.component';
import Photo from './components/photo.component';

const Home = () => (
	<div
		id='intro'
		className='flex flex-wrap-reverse w-screen bg-primaryColor box-border pt-16 md:h-screen md:pt-0'
	>
		<Intro />
		<Photo />
	</div>
);

export default Home;
