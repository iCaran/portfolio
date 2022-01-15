import React from 'react';

import './content.styles.scss';

const Content = () => (
	<div className='content-wrapper'>
		<ul className='content'>
			<li>
				Hi, I am Shivam Bhasin, a B.Tech CSE student with a huge interest in
				technology, coding, and development.
			</li>
			<li>
				Currently, I have hands-on experience in Full Stack Web development,
				Video Editing, Photo Editing, Competitive Programming.
			</li>
			<li>
				Working on technologies like NodeJS, ReactJS, SQL, Python, C++,
				Firebase, AWS.
			</li>
			<li>
				Built a CLI application that allows all clients of Credence Analytics to
				automate the intialization of their product.
			</li>
			<a
				href='https://drive.google.com/file/d/1hq0QW10x34a_y6zao-WCEm90MZJT11aZ/view?usp=sharing'
				className='btn'
				target={'_blank'}
				rel='noreferrer'
			>
				My Resume
			</a>
		</ul>
	</div>
);

export default Content;
